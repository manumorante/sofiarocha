import cx from 'clsx'
import Title from './Title'

function Section({ children }) {
  return <div className={cx('Section my-10')}>{children}</div>
}

Section.Title = Title

export default Section
