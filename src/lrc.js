/**
 * Parse magang0425/NCE style bilingual LRC: [mm:ss.xx]English|中文
 */
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

    const parts = content.split('|')
    const en = (parts[0] || '').trim()
    const cn = parts.length > 1 ? parts.slice(1).join('|').trim() : ''
    lyrics.push({ en, cn })
  }

  return { meta, lyrics }
}

export function buildLrcUrl(contentBase, bookKey, fileName) {
  const base = contentBase.replace(/\/$/, '')
  return `${base}/${bookKey}/${encodeURIComponent(fileName)}`
}
