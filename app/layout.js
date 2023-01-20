import 'styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js App</title>
      </head>
      <body className='text-zinc-900 bg-zinc-200'>
        <div className='Layout mx-auto max-w-3xl p-8'>{children}</div>
      </body>
    </html>
  )
}
