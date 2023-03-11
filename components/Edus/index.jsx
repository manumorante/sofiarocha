import cx from 'clsx'
import Item from './Item'

function Edus({ children }) {
  return <div className={cx('Educations', 'flex flex-col gap-8')}>{children}</div>
}

Edus.Item = Item

export default Edus
