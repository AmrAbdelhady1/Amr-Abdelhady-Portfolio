import { Montserrat } from 'next/font/google'
import profileImg from '../../public/images/profile/developer-pic-1.png'
import Image from 'next/image';
import Animatedtext from '@/components/animatedtext';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg'
import HireMe from '@/components/hireme';
import TransitionEffect from '@/components/transitioneffect';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function Home() {

  return (
    <main className={`${montserrat.variable} font-mont w-full min-h-screen text-dark dark:text-light`}>
      <TransitionEffect />
      <div className='flex items-center justify-center w-full flex-col xl:flex-row mb-40'>
        <div className='xl:w-1/2 w-full'>
          <Image src={profileImg} alt="profile" className='w-full h-auto xl:inline-block lg:hidden md:inline-block md:w-full'
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
          />
        </div>
        <div className=' flex flex-col items-center self-center lg:w-full xl:w-1/2 lg:py-72 lg:text-center xl:text-start'>
          <Animatedtext text="Turning Vision Into Reality With Code And Design." className='!text-3xl !text-left
            xl:!text-5xl xl:!text-left lg:!text-center lg:!text-6xl md:!text-5xl
          ' />
          <p className='my-4 text-base font-medium'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects, showcasing my expertise in React.js and web development.</p>
          <div className='flex items-center self-center xl:self-start  mt-2'>
            <Link href={"https://drive.google.com/file/d/1LfmCNPfQn_-cGIYu6FifdHD5cHp5a0E-/view"} download={true} target={"_blank"}
              className='flex items-center bg-dark hover:bg-light text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                '
            >
              Resume <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link href={"https://wa.me/201113761670"} target={"_blank"}
              className='ml-4 underline text-lg font-medium capitalize'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
      <div className='absolute right-8 bottom-8 lg:inline-block w-24 hidden'>
        <Image src={lightBlub} alt="amrabdelhady" className='w-full h-auto' />
      </div>
    </main>
  )
}
