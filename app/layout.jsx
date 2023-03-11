import 'styles/globals.css'
import { Quicksand } from 'next/font/google'
import cx from 'clsx'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      className={cx(
        quicksand.className,
        'bg-white text-darkend',
        'dark:bg-darkend dark:text-lightend'
      )}>
      <head>
        <meta property='og:image' content='/public/OG.jpg' />
      </head>
      {children}
    </html>
  )
}
