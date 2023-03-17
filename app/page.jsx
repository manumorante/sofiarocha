import cx from 'clsx'
import Image from 'next/image'
import { Logo } from 'components/Logo'

export default function Home() {
  const mainCx = cx('w-full h-full flex items-center justify-center')
  const cardCx = cx(
    'relative aspect-card p-8 text-[#6b6451] bg-[#faf5f4] flex items-center justify-center shadow-xl'
  )
  const paperCx = cx('absolute z-0 w-full h-full object-cover')
  const logoCx = cx('relative z-10')

  return (
    <div className={mainCx}>
      <div className={cardCx}>
        <Logo className={logoCx} />
        <Image className={paperCx} width={384} height={224} src='/paper.jpg' alt='Paper' />
      </div>
    </div>
  )
}
