import cx from 'clsx'
function Title({ children }) {
  return (
    <div className={cx('SectionTitle', 'py-6 px-8', 'font-light text-xl text-darkend/50')}>
      {children}
    </div>
  )
}

export default Title
