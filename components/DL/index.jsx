function DList({ children, humanize }) {
  return <dl>{children}</dl>
}

function Item({ term, definition }) {
  return (
    <div className='flex gap-2'>
      <dt className='font-bold'>{term}</dt>
      <dd className='text-neutral-500'>{definition}</dd>
    </div>
  )
}

DList.Item = Item
export default DList
