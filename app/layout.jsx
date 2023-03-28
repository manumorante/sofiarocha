import Script from 'next/script'
import 'styles/globals.css'

const meta = {
  title: 'Sofía Rocha',
  description: 'Masajista Profesional en Granada',
  url: 'https://sofiarocha.es',
  image: '/og/sofia-rocha-masajista.jpg',
  bgcolor: '#d0ceca',
  ga: 'G-3H2DS46SP4'
}

const htmlStyles = { height: '100%', backgroundColor: meta.bgcolor }
const bodyStyles = { height: '100%' }

export default function RootLayout({ children }) {
  return (
    <html lang='es' style={htmlStyles}>
      <head>
        <title>{meta.title} - {meta.description}</title>
        <meta name='description' content={meta.description} />

        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${meta.ga}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      </head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
      />
      <body style={bodyStyles}>{children}</body>
    </html>
  )
}
