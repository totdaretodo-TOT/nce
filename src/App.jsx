import { useState, useEffect, useRef } from 'react'
import { parseLrc, buildLrcUrl } from './lrc.js'

function App() {
  const [manifest, setManifest] = useState(null)
  const [manifestError, setManifestError] = useState(null)
  const [currentBookKey, setCurrentBookKey] = useState('NCE1')
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [currentLyricIndex, setCurrentLyricIndex] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playMode, setPlayMode] = useState('single')
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [translationMode, setTranslationMode] = useState('show')
  const [activeTab, setActiveTab] = useState('lyrics')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [darkTheme, setDarkTheme] = useState(false)
  const [lrcPayload, setLrcPayload] = useState({
    loading: false,
    lyrics: [],
    meta: {},
    error: null,
  })

  const lrcCacheRef = useRef({})
  const [vocabData, setVocabData] = useState(null)

  const books = manifest?.books ?? []
  const currentBook = books.find((b) => b.key === currentBookKey) || books[0]
  const currentLesson = currentBook?.lessons?.[currentLessonIndex] ?? null
  const lyrics = lrcPayload.lyrics
  
  // 获取当前课程的词汇和测验
  const lessonData = vocabData?.[currentBook?.key]?.[currentLesson?.id] || {}
  const vocabulary = lessonData.vocabulary || []
  const quizzes = lessonData.quizzes || []

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
    localStorage.setItem('nce-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('nce-theme')
    if (savedTheme === 'dark') setDarkTheme(true)
  }, [])

  const loadManifest = () => {
    setManifestError(null)
    const url = `${import.meta.env.BASE_URL}nce-manifest.json`
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`无法加载课程清单 (${r.status})`)
        return r.json()
      })
      .then((data) => {
        setManifest(data)
        setCurrentBookKey((key) => {
          if (!data.books?.some((b) => b.key === key)) {
            return data.books?.[0]?.key ?? 'NCE1'
          }
          return key
        })
      })
      .catch((e) => {
        setManifestError(e.message || String(e))
      })
  }

  useEffect(() => {
    loadManifest()
    // 加载词汇数据
    fetch(`${import.meta.env.BASE_URL}vocabulary-data.json`)
      .then(r => r.json())
      .then(data => setVocabData(data))
      .catch(err => console.error('加载词汇数据失败:', err))
  }, [])

  useEffect(() => {
    if (!manifest?.contentBase || !currentBook || !currentLesson?.file) {
      setLrcPayload({ loading: false, lyrics: [], meta: {}, error: null })
      return undefined
    }

    const cacheKey = `${currentBook.key}/${currentLesson.file}`
    const cached = lrcCacheRef.current[cacheKey]
    if (cached) {
      setLrcPayload({ loading: false, lyrics: cached.lyrics, meta: cached.meta, error: null })
      return undefined
    }

    let cancelled = false
    const url = buildLrcUrl(manifest.contentBase, currentBook.key, currentLesson.file)
    setLrcPayload({ loading: true, lyrics: [], meta: {}, error: null })

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`字幕请求失败 (${r.status})`)
        return r.text()
      })
      .then((text) => {
        if (cancelled) return
        const { meta, lyrics: parsed } = parseLrc(text)
        lrcCacheRef.current[cacheKey] = { meta, lyrics: parsed }
        setLrcPayload({ loading: false, lyrics: parsed, meta, error: null })
      })
      .catch((e) => {
        if (cancelled) return
        setLrcPayload({
          loading: false,
          lyrics: [],
          meta: {},
          error: e.message || String(e),
        })
      })

    return () => {
      cancelled = true
    }
  }, [manifest, currentBookKey, currentLessonIndex, currentBook, currentLesson?.file])

  useEffect(() => {
    if (!isPlaying) return undefined
    if (currentLyricIndex < 0) return undefined
    const len = lyrics.length
    if (len === 0) return undefined
    const tick = 2500 / playbackRate
    const id = window.setInterval(() => {
      setCurrentLyricIndex((prev) => {
        if (prev < 0) return prev
        if (prev < len - 1) return prev + 1
        setIsPlaying(false)
        return -1
      })
    }, tick)
    return () => window.clearInterval(id)
  }, [isPlaying, playbackRate, lyrics.length])

  const handleLessonSelect = (index) => {
    setCurrentLessonIndex(index)
    setCurrentLyricIndex(-1)
    setIsPlaying(false)
    setQuizAnswers({})
  }

  const handlePlayPause = () => {
    if (lrcPayload.loading || lrcPayload.error || lyrics.length === 0) return
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      if (currentLyricIndex === -1) {
        setCurrentLyricIndex(0)
      }
      setIsPlaying(true)
    }
  }

  const handleLyricClick = (index) => {
    if (lrcPayload.loading || lrcPayload.error) return
    setCurrentLyricIndex(index)
    setIsPlaying(true)
  }

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      handleLessonSelect(currentLessonIndex - 1)
    }
  }

  const handleNextLesson = () => {
    if (currentBook && currentLessonIndex < currentBook.lessons.length - 1) {
      handleLessonSelect(currentLessonIndex + 1)
    }
  }

  const cycleSpeed = () => {
    const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]
    const currentIndex = speeds.indexOf(playbackRate)
    const nextIndex = (currentIndex + 1) % speeds.length
    setPlaybackRate(speeds[nextIndex])
  }

  const togglePlayMode = () => {
    setPlayMode((prev) => (prev === 'single' ? 'continuous' : 'single'))
  }

  const cycleTranslation = () => {
    const modes = ['show', 'hide', 'blur']
    const currentIndex = modes.indexOf(translationMode)
    const nextIndex = (currentIndex + 1) % modes.length
    setTranslationMode(modes[nextIndex])
  }

  const handleQuizAnswer = (quizIndex, optionIndex) => {
    setQuizAnswers((prev) => ({ ...prev, [quizIndex]: optionIndex }))
  }

  const cycleTheme = () => {
    setDarkTheme((prev) => !prev)
  }

  const getTranslationDisplay = () => {
    if (translationMode === 'hide') return '英'
    if (translationMode === 'blur') return '模'
    return '中'
  }

  const lessonTitle =
    (lrcPayload.meta?.ti && String(lrcPayload.meta.ti).trim()) ||
    currentLesson?.label ||
    '—'

  if (manifestError && !manifest) {
    return (
      <div className="app-error">
        <p>{manifestError}</p>
        <button type="button" onClick={() => loadManifest()}>
          重试
        </button>
      </div>
    )
  }

  if (!manifest || !currentBook || !currentLesson) {
    return (
      <div className="app-loading">
        <p>正在加载课程清单…</p>
      </div>
    )
  }

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1>新概念英语</h1>
          <span className="subtitle">New Concept English</span>
        </div>
        <div className="header-right">
          <select
            className="book-select"
            value={currentBookKey}
            onChange={(e) => {
              setCurrentBookKey(e.target.value)
              setCurrentLessonIndex(0)
              setCurrentLyricIndex(-1)
              setQuizAnswers({})
              setIsPlaying(false)
            }}
          >
            {books.map((book) => (
              <option key={book.key} value={book.key}>
                {book.title}
              </option>
            ))}
          </select>
          <button type="button" className="theme-toggle" onClick={cycleTheme}>
            {darkTheme ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="container">
        <aside className="lesson-list">
          <h2>课程列表</h2>
          <div className="lesson-items">
            {currentBook.lessons.map((lesson, index) => (
              <div
                key={`${lesson.id}-${lesson.file}`}
                className={`lesson-item ${index === currentLessonIndex ? 'active' : ''}`}
                onClick={() => handleLessonSelect(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleLessonSelect(index)
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <h3>{lesson.label}</h3>
                <div className="lesson-sub">第 {lesson.id} 课</div>
              </div>
            ))}
          </div>
        </aside>

        <div className="main-content">
          <section className="player-section">
            <div className="book-info">
              <div
                className="book-cover"
                style={{
                  background: 'linear-gradient(135deg, #e04e39, #f28f3b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                {currentBook.key}
              </div>
              <div className="book-details">
                <h2>{lessonTitle}</h2>
                <span className="level">{currentBook.level}</span>
              </div>
            </div>

            <div className="control-panel">
              <div className="control-buttons">
                <button type="button" className="nav-btn" onClick={handlePrevLesson} disabled={currentLessonIndex === 0}>
                  ◀
                </button>
                <button
                  type="button"
                  className="play-btn"
                  onClick={handlePlayPause}
                  disabled={lrcPayload.loading || !!lrcPayload.error || lyrics.length === 0}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={handleNextLesson}
                  disabled={currentLessonIndex === currentBook.lessons.length - 1}
                >
                  ▶
                </button>
                <button type="button" className={`speed-btn ${playbackRate !== 1.0 ? 'active' : ''}`} onClick={cycleSpeed}>
                  {playbackRate}x
                </button>
                <button
                  type="button"
                  className={`mode-btn ${playMode === 'continuous' ? 'active' : ''}`}
                  onClick={togglePlayMode}
                >
                  {playMode === 'single' ? '单句' : '连播'}
                </button>
                <button type="button" className="translate-btn" onClick={cycleTranslation}>
                  {getTranslationDisplay()}
                </button>
              </div>
            </div>
          </section>

          <div className="tabs">
            <button type="button" className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => setActiveTab('lyrics')}>
              课文
            </button>
            <button type="button" className={`tab-btn ${activeTab === 'vocab' ? 'active' : ''}`} onClick={() => setActiveTab('vocab')}>
              词汇 ({vocabulary.length})
            </button>
            <button type="button" className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
              测验 ({quizzes.length})
            </button>
          </div>

          <section className={`lyrics-section ${translationMode === 'blur' ? 'blur-mode' : ''}`}>
            {activeTab === 'lyrics' && (
              <>
                {lrcPayload.loading && <div className="lyrics-loading">正在加载字幕…</div>}
                {lrcPayload.error && (
                  <div className="app-error" style={{ minHeight: 'auto' }}>
                    <p>{lrcPayload.error}</p>
                  </div>
                )}
                {!lrcPayload.loading && !lrcPayload.error && (
                  <div className="lyrics-display">
                    {lyrics.map((line, index) => (
                      <div
                        key={`${index}-${line.en}`}
                        className={`lyric-line ${index === currentLyricIndex ? 'active' : ''}`}
                        onClick={() => handleLyricClick(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleLyricClick(index)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="lyric-text">{line.en}</div>
                        {translationMode !== 'hide' && <div className="lyric-translation">{line.cn}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === 'vocab' && (
              <div className="vocab-list">
                {vocabulary.length === 0 ? (
                  <p className="empty-tab">暂无词汇表。当前课文来自社区中英字幕（LRC），未包含结构化词汇数据。</p>
                ) : (
                  vocabulary.map((word, index) => (
                    <div key={index} className="vocab-item">
                      <div>
                        <span className="vocab-word">{word.word}</span>
                        <span className="vocab-phonetic">{word.phonetic}</span>
                      </div>
                      <span className="vocab-pos">{word.pos}</span>
                      <div className="vocab-definition">{word.def}</div>
                      <div className="vocab-example">&quot;{word.example}&quot;</div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="quiz-list">
                {quizzes.length === 0 ? (
                  <p className="empty-tab">暂无测验题。可在后续版本接入题库或根据课文自行补充。</p>
                ) : (
                  quizzes.map((quiz, quizIndex) => {
                    const userAnswer = quizAnswers[quizIndex]
                    const isAnswered = userAnswer !== undefined
                    const isCorrect = userAnswer === quiz.answer

                    return (
                      <div key={quizIndex} className="quiz-item">
                        <div className="quiz-question">
                          {quizIndex + 1}. {quiz.q}
                        </div>
                        <div className="quiz-options">
                          {quiz.options.map((option, optIndex) => {
                            let optionClass = 'quiz-option'
                            if (isAnswered) {
                              if (optIndex === quiz.answer) {
                                optionClass += ' correct'
                              } else if (optIndex === userAnswer) {
                                optionClass += ' incorrect'
                              }
                            }
                            return (
                              <div
                                key={optIndex}
                                className={optionClass}
                                onClick={() => !isAnswered && handleQuizAnswer(quizIndex, optIndex)}
                                onKeyDown={(e) => {
                                  if ((e.key === 'Enter' || e.key === ' ') && !isAnswered) {
                                    e.preventDefault()
                                    handleQuizAnswer(quizIndex, optIndex)
                                  }
                                }}
                                role="button"
                                tabIndex={0}
                              >
                                {option}
                              </div>
                            )
                          })}
                        </div>
                        {isAnswered && (
                          <div className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                            {isCorrect ? '✓ 正确！' : '✗ 错误。'}
                            {quiz.exp}
                          </div>
                        )}
                      </div>
                    )
                  })
                )}
              </div>
            )}
          </section>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 新概念英语学习播放器 | NCE Learning Player</span>
        {manifest.attribution && <span className="attribution">{manifest.attribution}</span>}
      </footer>
    </>
  )
}

export default App
