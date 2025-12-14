import './globals.css'

export const metadata = {
  title: 'EliteSoft Technologies',
  description: 'Full-stack software engineering and technology solutions.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
