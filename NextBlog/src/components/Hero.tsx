import Image from 'next/image'
import ProfileImage from '../../public/images/picture.bmp'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='text-center'>
      <Image className='mx-auto rounded-full' src={ProfileImage} height={180} alt={'이쁜'} priority/>
      <h2 className='text-2xl font-bold mt-2'>My name is Park Juhyun</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>JS, Python</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
      </Link>
    </section>
  )
}
