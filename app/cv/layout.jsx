import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })
export default function CVLayout({ children }) {
  return (
    <body className={quicksand.className}>
      <div className='Layout mx-auto max-w-5xl'>{children}</div>
    </body>
  )
}
