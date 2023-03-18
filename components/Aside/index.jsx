import cx from 'clsx'
import Item from './Item'

function Aside({ children }) {
  return (
    <aside
      className={cx(
        'Aside',
        'relative',
        'z-10',
        'w-full md:w-sidebar',
        'px-8 pb-6 md:pb-10',
        'flex flex-col',
        'bg-gray-200'
      )}>
      {children}
    </aside>
  )
}

Aside.Item = Item

export default Aside
