/**
 * Parse magang0425/NCE style bilingual LRC: [mm:ss.xx]English|中文
 * Now preserves timestamps for audio sync.
 */

function parseTime(timeStr) {
  const parts = timeStr.split(':')
  const min = parseInt(parts[0], 10)
  const sec = parseFloat(parts[1])
  return min * 60 + sec
}

export function parseLrc(text) {
  const meta = { ti: '', ar: '', al: '' }
  const lyrics = []

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim()
    if (!line) continue

    const metaMatch = line.match(/^\[(ti|ar|al):(.+)\]$/i)
    if (metaMatch) {
      meta[metaMatch[1].toLowerCase()] = metaMatch[2].trim()
      continue
    }

    const lyricMatch = line.match(/^\[(\d{1,2}:\d{2}(?:\.\d{1,3})?)\](.+)$/)
    if (!lyricMatch) continue

    const content = lyricMatch[2].trim()
    if (!content) continue

    const time = parseTime(lyricMatch[1])
    const parts = content.split('|')
    const en = (parts[0] || '').trim()
    const cn = parts.length > 1 ? parts.slice(1).join('|').trim() : ''
    lyrics.push({ time, en, cn })
  }

  return { meta, lyrics }
}

export function buildLrcUrl(contentBase, bookKey, fileName) {
  const base = contentBase.replace(/\/$/, '')
  return `${base}/${bookKey}/${encodeURIComponent(fileName)}`
}

/**
 * Build audio URL from mleo.site CDN.
 * Audio format: https://85.mleo.site/{bookKey}/{bookKey}(1985 British accent)_{lessonNum}.mp3
 * For NCE2-4 the pattern is similar but uses "1985 British accent" for all.
 */
const AUDIO_BASE = 'https://85.mleo.site'

export function buildAudioUrl(bookKey, lessonFile) {
  // Extract lesson number from lrc filename, e.g. "001&002－Excuse Me.lrc" -> "001"
  const numMatch = lessonFile.match(/^(\d{2,3})/)
  if (!numMatch) return null
  const num = numMatch[1]
  const encoded = encodeURIComponent(`${bookKey}(1985 British accent)_${num}.mp3`)
  return `${AUDIO_BASE}/${bookKey}/${encoded}`
}
