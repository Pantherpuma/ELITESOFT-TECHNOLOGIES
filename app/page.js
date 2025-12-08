import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDir = path.join(process.cwd(), 'content', 'pages')

function readPage(slug) {
  const p = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p, 'utf8')
  const { data, content } = matter(raw)
  return { data, html: marked(content) }
}

export default function Home({}) {
  const page = readPage('home')

  return (
    <main style={{fontFamily:'system-ui,Segoe UI,Roboto',padding:'40px'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <h1 style={{color:'#0b5fff'}}>Build Smarter — Ship Faster.</h1>
        <p style={{color:'#334155'}} dangerouslySetInnerHTML={{__html: page?.html || '<p>Content not found</p>'}} />
        <div style={{marginTop:20}}>
          <a href="/shop" style={{marginRight:12}}>Shop Tech Products</a>
          <a href="/contact">Get a Free Consultation</a>
        </div>
      </div>
    </main>
  )
}
