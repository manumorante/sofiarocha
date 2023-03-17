import 'styles/globals.css'
import { Quicksand } from 'next/font/google'
import cx from 'clsx'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({ children }) {
  const htmlCx = cx('h-full', quicksand.className)

  const bodyCx = cx(
    'Body',
    'h-full',
    //
    'bg-cover',
    'bg-center',
    `bg-[url('/papers.jpg')]`
  )
  return (
    <html lang='es' className={htmlCx} style={{ backgroundColor: '#d0ceca' }}>
      <head>
        <meta property='og:image' content='/public/OG.jpg' />
      </head>
      <body className={bodyCx}>{children}</body>
    </html>
  )
}
