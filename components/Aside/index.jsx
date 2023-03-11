import cx from 'clsx'
import Item from './Item'

function Aside({ children }) {
  return (
    <aside
      className={cx(
        'Aside',
        'w-full sm:w-sidebar',
        'px-8 pb-6 sm:pb-10',
        'flex flex-col',
        'bg-gray-200 dark:bg-gray-800'
      )}>
      {children}
    </aside>
  )
}

Aside.Item = Item

export default Aside
