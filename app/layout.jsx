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
        <meta
          name='description'
          content='Sofía Rocha, masajista profesional, masajes relajantes y terapéuticos para mejorar tu bienestar. Reserva una cita.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Sofía Rocha' />
        <meta property='og:image' content='/og/sofia-rocha-masajista.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </head>
      <body className={bodyCx}>{children}</body>
    </html>
  )
}
