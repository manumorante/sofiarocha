import 'styles/globals.css'

const htmlStyles = { height: '100%', backgroundColor: '#d0ceca' }
const bodyStyles = { height: '100%' }

export default function RootLayout({ children }) {
  return (
    <html lang='es' style={htmlStyles}>
      <head>
        <title>Sofía Rocha - masajista profesional</title>
        <meta name='description' content='Sofía Rocha - masajista profesional' />

        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Sofía Rocha' />
        <meta property='og:image' content='/og/sofia-rocha-masajista.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </head>
      <body style={bodyStyles}>{children}</body>
    </html>
  )
}
