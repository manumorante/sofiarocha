function Item({ from, to, title, center }) {
  return (
    <div className='Education'>
      <div className='font-bold'>{center}</div>
      <div className='text-neutral-500'>
        {from} - {to}
      </div>
      <h3 className=''>{title}</h3>
    </div>
  )
}

export default Item
