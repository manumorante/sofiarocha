import cx from 'clsx'
import Item from './Item'

function Jobs({ children }) {
  return <div className={cx('Jobs', 'flex flex-col gap-8')}>{children}</div>
}

Jobs.Item = Item

export default Jobs
