'use client'

import { useState } from 'react'

function Item({ children, title, summary = 'No hay resumen' }) {
  const [sumarized, setSumarized] = useState(false)

  return (
    <div className='Aside-Item my-6' onClick={() => setSumarized(!sumarized)}>
      {sumarized ? (
        <Summary title={title}>{summary}</Summary>
      ) : (
        <Default title={title}>{children}</Default>
      )}
    </div>
  )
}

function Default({ children, title }) {
  return (
    <>
      <h5 className='font-light text-xl text-darkend/50 dark:text-lightend/50'>{title}</h5>
      {children}
    </>
  )
}

function Summary({ children, title }) {
  return (
    <>
      <h5 className='font-light uppercase text-md text-darkend/50 dark:text-lightend/50'>
        {title}
      </h5>
      <p className='text-xl'>{children}</p>
    </>
  )
}

export default Item
