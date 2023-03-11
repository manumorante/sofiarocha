import cx from 'clsx'
function Title({ children }) {
  return (
    <div
      className={cx(
        'SectionTitle',
        'mb-4',
        'font-light text-xl text-darkend/50 dark:text-lightend/50'
      )}>
      {children}
    </div>
  )
}

export default Title
