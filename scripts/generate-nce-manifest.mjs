/**
 * Fetches lesson file lists from magang0425/NCE (GitHub API) and writes public/nce-manifest.json.
 * Run: node scripts/generate-nce-manifest.mjs
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'nce-manifest.json')

const CONTENT_BASE =
  'https://raw.githubusercontent.com/magang0425/NCE/master'

const BOOKS = [
  { key: 'NCE1', dir: 'NCE1', title: '新概念英语第一册', level: 'A2' },
  { key: 'NCE2', dir: 'NCE2', title: '新概念英语第二册', level: 'B1' },
  { key: 'NCE3', dir: 'NCE3', title: '新概念英语第三册', level: 'B2' },
  { key: 'NCE4', dir: 'NCE4', title: '新概念英语第四册', level: 'C1' },
]

function labelFromFilename(name) {
  const base = name.replace(/\.lrc$/i, '')
  const stripped = base.replace(/^[\d&]+[－-]\s*/, '').trim()
  return stripped || base
}

function naturalCompare(a, b) {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
}

async function listLrcFiles(dir) {
  const url = `https://api.github.com/repos/magang0425/NCE/contents/${encodeURIComponent(dir)}?ref=master`
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'nce-manifest-generator',
    },
  })
  if (!res.ok) {
    throw new Error(`GitHub API ${dir}: ${res.status} ${await res.text()}`)
  }
  const items = await res.json()
  if (!Array.isArray(items)) throw new Error(`Unexpected API payload for ${dir}`)
  return items
    .filter((x) => x.type === 'file' && /\.lrc$/i.test(x.name) && !/\.lrc\.bak$/i.test(x.name))
    .sort(naturalCompare)
}

async function main() {
  const books = []
  for (const b of BOOKS) {
    const files = await listLrcFiles(b.dir)
    const lessons = files.map((f, i) => ({
      id: i + 1,
      file: f.name,
      label: labelFromFilename(f.name),
    }))
    books.push({
      key: b.key,
      title: b.title,
      level: b.level,
      lessons,
    })
  }

  const manifest = {
    version: 1,
    contentBase: CONTENT_BASE,
    attribution:
      '课文字幕来自 GitHub 仓库 magang0425/NCE（LRC 中英对照）；教材版权归原出版社所有。',
    books,
  }

  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(OUT, JSON.stringify(manifest, null, 2), 'utf8')
  const total = books.reduce((n, bk) => n + bk.lessons.length, 0)
  console.log(`Wrote ${OUT} (${total} lessons across ${books.length} books).`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
