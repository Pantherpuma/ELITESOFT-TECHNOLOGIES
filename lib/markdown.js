import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDir = path.join(process.cwd(), 'content')

export function getPage(slug){
  const p = path.join(contentDir, 'pages', `${slug}.md`)
  if(!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p,'utf8')
  const { data, content } = matter(raw)
  return { ...data, html: marked(content) }
}

export function listPages(){
  const pagesDir = path.join(contentDir, 'pages')
  if(!fs.existsSync(pagesDir)) return []
  return fs.readdirSync(pagesDir).filter(f=>f.endsWith('.md')).map(f=>f.replace('.md',''))
}
