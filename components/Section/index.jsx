import cx from 'clsx'
import Title from './Title'

function Section({ children }) {
  return <div className={cx('Section')}>{children}</div>
}

Section.Title = Title

export default Section
