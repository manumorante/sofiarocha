import 'styles/globals.css'

import cx from 'clsx'

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>Sofía Rocha - masajista profesional</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                html, body {
                  height: 100%;
                  background-color: '#d0ceca'
                }                
              `,
          }}
        />

        <meta
          name='description'
          content='Sofía Rocha - masajista profesional, masajes relajantes y terapéuticos para mejorar tu bienestar. Reserva una cita.'
        />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:title' content='Sofía Rocha' />
        <meta property='og:image' content='/og/sofia-rocha-masajista.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </head>
      <body>{children}</body>
    </html>
  )
}
