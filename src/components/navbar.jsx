import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons'
import { motion } from 'framer-motion'
import UseThemeSwitcher from './hooks/usethemeswitcher'
import { useStateContext } from '@/context/statecontext'

const CustomeLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  const { setModeTheme } = useStateContext();
  const [mode, setMode] = UseThemeSwitcher();

  return (
    <div className='px-32 py-10 flex items-center justify-between font-medium w-full dark:text-light'>

      <nav>
        <CustomeLink href={"/"} title={"Home"} className={"mr-4"} />
        <CustomeLink href={"/about"} title={"About"} className={"mx-4"} />
        <CustomeLink href={"/projects"} title={"Projects"} className={"ml-4"} />
      </nav>

      <nav className='flex items-center justify-center flex-wrap gap-6'>

        <motion.a href="https://www.linkedin.com/in/amr-abdelhady-a35216184/" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a href="https://github.com/AmrAbdelhady1" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a href="https://twitter.com/amrabdelhady2" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a href="https://www.pinterest.com/aabdelhady0604/" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>

        <motion.a href="/" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>

        <button onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
          setModeTheme(mode === "light" ? "dark" : "light");
        }}
        className='p-1 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark'
        >
          {mode === "dark" ?
            <SunIcon className={"fill-dark"} /> :
            <MoonIcon className={"fill-dark"} />
          }
        </button>

      </nav>

      <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
        <Logo />
      </div>

    </div>
  )
}

export default Navbar