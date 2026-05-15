import { useState, useEffect, useRef, useCallback } from 'react'
import { parseLrc, buildLrcUrl, buildAudioUrl, buildMleoLrcUrl } from './lrc.js'

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
  const audioRef = useRef(null)
  const [vocabData, setVocabData] = useState(null)
  const [audioUrl, setAudioUrl] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [audioLoading, setAudioLoading] = useState(false)

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
    if (!currentBook || !currentLesson?.file) {
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
    // Use mleo.site LRC (synced with the audio from same CDN)
    const url = buildMleoLrcUrl(currentBook.key, currentLesson.file)
    if (!url) {
      setLrcPayload({ loading: false, lyrics: [], meta: {}, error: '无法构建字幕URL' })
      return undefined
    }
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

  // Build audio URL when lesson changes
  useEffect(() => {
    if (!currentBook || !currentLesson?.file) {
      setAudioUrl(null)
      return
    }
    const url = buildAudioUrl(currentBook.key, currentLesson.file)
    setAudioUrl(url)
  }, [currentBook, currentLesson?.file])

  // Load audio when URL changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audioUrl) return
    setAudioLoading(true)
    audio.src = audioUrl
    audio.playbackRate = playbackRate
    audio.load()
  }, [audioUrl])

  // Sync playback rate to audio element
  useEffect(() => {
    const audio = audioRef.current
    if (audio) audio.playbackRate = playbackRate
  }, [playbackRate])

  // Audio timeupdate -> sync lyric index
  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current
    if (!audio || lyrics.length === 0) return
    const t = audio.currentTime
    setCurrentTime(t)
    // Find the last lyric whose time <= current audio time
    let idx = -1
    for (let i = lyrics.length - 1; i >= 0; i--) {
      if (lyrics[i].time <= t) {
        idx = i
        break
      }
    }
    if (idx >= 0) setCurrentLyricIndex(idx)
  }, [lyrics])

  // Play/pause sync
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Auto-scroll to active lyric
  useEffect(() => {
    if (activeTab !== 'lyrics' || currentLyricIndex === -1) return
    const activeLine = document.querySelector('.lyric-line.active')
    if (activeLine) {
      // scrollIntoView will scroll the closest scrollable parent (main-content)
      activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentLyricIndex, activeTab])

  const handleLessonSelect = (index) => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setCurrentLessonIndex(index)
    setCurrentLyricIndex(-1)
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setQuizAnswers({})
  }

  const handlePlayPause = () => {
    if (lrcPayload.loading || lrcPayload.error || lyrics.length === 0) return
    if (audioLoading) return
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
    const audio = audioRef.current
    if (audio && lyrics[index]?.time != null) {
      audio.currentTime = lyrics[index].time
    }
    setCurrentLyricIndex(index)
    setIsPlaying(true)
  }

  const playWordAudio = (word, accent) => {
    if (!word) return
    // e.g. "excuse" -> "excuse_uk.mp3"
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (!cleanWord) return
    const bookPrefix = currentBook?.key?.toLowerCase() || 'nce1'
    const url = `https://newconceptenglish.com/nce-mp3-single-word/${bookPrefix}/${cleanWord}_${accent}.mp3`
    const audio = new Audio(url)
    audio.play().catch(err => console.log('Word audio not found or failed to play:', err))
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

  const formatTime = (sec) => {
    if (!sec || !isFinite(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    audio.currentTime = pct * duration
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
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          const audio = audioRef.current
          if (audio) setDuration(audio.duration)
          setAudioLoading(false)
        }}
        onEnded={() => {
          setIsPlaying(false)
          setCurrentLyricIndex(-1)
        }}
        onError={() => setAudioLoading(false)}
      />
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
          <footer className="footer">
            <span>© 2026 新概念英语学习播放器 | NCE Learning Player</span>
            {manifest.attribution && <span className="attribution">{manifest.attribution}</span>}
          </footer>
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
                  disabled={lrcPayload.loading || !!lrcPayload.error || lyrics.length === 0 || audioLoading}
                >
                  {audioLoading ? '⏳' : isPlaying ? '⏸' : '▶'}
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
              {duration > 0 && (
                <div className="progress-container">
                  <span className="time-label">{formatTime(currentTime)}</span>
                  <div className="progress-bar" onClick={handleProgressClick} role="progressbar" tabIndex={0}>
                    <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }} />
                  </div>
                  <span className="time-label">{formatTime(duration)}</span>
                </div>
              )}
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
              <div className="vocab-grid">
                {vocabulary.length === 0 ? (
                  <p className="empty-tab">暂无词汇表。当前课文来自社区中英字幕（LRC），未包含结构化词汇数据。</p>
                ) : (
                  vocabulary.map((word, index) => (
                    <div key={index} className="word-card">
                      <div className="word-card-inner">
                        <div className="word-front">
                          <div className="word-header">
                            <span className="word-text">{word.word}</span>
                            <span className="word-phonetic">{word.phonetic}</span>
                          </div>
                          <div className="word-audio-buttons">
                            <button className="audio-btn" onClick={() => playWordAudio(word.word, 'uk')} title="英音发音">
                              <span>🇬🇧 英</span>
                            </button>
                            <button className="audio-btn" onClick={() => playWordAudio(word.word, 'us')} title="美音发音">
                              <span>🇺🇸 美</span>
                            </button>
                          </div>
                        </div>
                        <div className="word-divider"></div>
                        <div className="word-back">
                          <div className="word-details">
                            <span className="word-pos">{word.pos}</span>
                            <span className="word-def">{word.def}</span>
                          </div>
                          {word.example && (
                            <div className="word-example">&quot;{word.example}&quot;</div>
                          )}
                        </div>
                      </div>
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
    </>
  )
}

export default App
