function Item({ from, to, company, rol, children }) {
  return (
    <div className='Job'>
      <div className='font-bold'>{company}</div>
      <div className='text-neutral-500'>
        {from} - {to}
      </div>
      <h3 className='font-bold'>{rol}</h3>
      {children}
    </div>
  )
}

export default Item
