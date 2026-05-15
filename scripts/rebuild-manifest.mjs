/**
 * Rebuild nce-manifest.json from mleo.site book.json files
 * to ensure lesson list matches audio/LRC source exactly.
 */
import { writeFileSync } from 'fs'

const AUDIO_BASE = 'https://85.mleo.site'

const BOOK_META = [
  { key: 'NCE1', title: '新概念英语第一册', level: 'A2' },
  { key: 'NCE2', title: '新概念英语第二册', level: 'B1' },
  { key: 'NCE3', title: '新概念英语第三册', level: 'B2' },
  { key: 'NCE4', title: '新概念英语第四册', level: 'C1' },
]

async function fetchBookJson(bookKey) {
  const url = `${AUDIO_BASE}/${bookKey}/book.json`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return res.json()
}

async function main() {
  const books = []
  
  for (const meta of BOOK_META) {
    console.log(`Fetching ${meta.key}...`)
    const data = await fetchBookJson(meta.key)
    
    const lessons = data.units.map((unit, index) => {
      // Extract lesson number from filename like "NCE1(1985 British accent)_001"
      const numMatch = unit.filename.match(/_(\d+)$/)
      const num = numMatch ? numMatch[1] : String(index + 1)
      
      // Extract title without the leading number
      const titleMatch = unit.title.match(/^\d+\.\s*(.+)$/)
      const label = titleMatch ? titleMatch[1].trim() : unit.title
      
      return {
        id: parseInt(num, 10),
        // Keep original manifest-style filename for backward compat
        // but now it maps directly to mleo.site numbering
        file: `${num}－${label}.lrc`,
        label
      }
    })
    
    books.push({
      key: meta.key,
      title: meta.title,
      level: meta.level,
      lessons
    })
    
    console.log(`  ${meta.key}: ${lessons.length} lessons`)
  }
  
  const manifest = {
    version: 2,
    audioBase: AUDIO_BASE,
    attribution: '课文和音频来自 85.mleo.site（1985 英音版）；词汇数据整理自教材；教材版权归原出版社所有。',
    books
  }
  
  writeFileSync('./public/nce-manifest.json', JSON.stringify(manifest, null, 2), 'utf8')
  console.log('\n✅ nce-manifest.json rebuilt successfully!')
  console.log(`Total: ${books.reduce((s, b) => s + b.lessons.length, 0)} lessons`)
}

main().catch(console.error)
