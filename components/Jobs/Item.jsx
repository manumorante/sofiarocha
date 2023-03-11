function Item({ from, to, company, rol, children }) {
  return (
    <div className='Job flex gap-2 items-start pr-6'>
      <div className='flex-grow-0 flex-shrink-0 w-24 -ml-4 pl-8 pr-3 py-2 bg-white shadow-lg text-right leading-none text-neutral-500 text-sm rounded-r'>
        <div>{from}</div>
        <div>{to}</div>
      </div>

      <div className='flex-grow'>
        <div className='font-bold text-lg'>{company}</div>
        <h3 className='font-bold'>{rol}</h3>
        {children}
      </div>
    </div>
  )
}

export default Item
