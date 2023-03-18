import cx from 'clsx'
import Image from 'next/image'
import { Logo } from 'components/Logo'

export default function Home() {
  const mainCx = cx(
    'Home',
    'w-full h-full',
    'flex items-center justify-center',
    //
    'bg-cover',
    'bg-center',
    `bg-[url('/papers.jpg')]`
  )

  const cardCx = cx(
    'Card',
    'relative',
    'aspect-card p-8',
    // Scale
    'scale-[0.74]', // Jose Luis
    'xs:scale-[0.84]', // Sofía y Kelsan
    'xs:scale-[0.96]', // Manu
    'flex items-center justify-center',
    'text-[#6b6451] bg-[#faf5f4]',
    'shadow-xl'
  )
  const paperCx = cx('Paper absolute z-0 w-full h-full object-cover')
  const logoCx = cx('Logo relative z-10')

  return (
    <div className={mainCx}>
      <div className={cardCx}>
        <Logo className={logoCx} />
        <Image
          loading='eager'
          className={paperCx}
          width={384}
          height={224}
          src='/paper.jpg'
          alt='Paper'
        />
      </div>
    </div>
  )
}
