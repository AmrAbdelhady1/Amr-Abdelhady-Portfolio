import Link from 'next/link'
import React, { useState } from 'react'
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

const CustomeLinkMobile = ({ href, title, className, toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button href={href} className={`${className} text-light dark:text-dark relative group my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;</span>
    </button>
  )
}

const Navbar = () => {
  const { setModeTheme } = useStateContext();
  const [mode, setMode] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='xl:px-32 lg:px-16 md:px-12 px-8 py-10 flex items-center justify-between font-medium w-full dark:text-light relative'>


      <button className='lg:hidden flex flex-col justify-center items-center' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>


      <nav className='hidden lg:flex'>
        <CustomeLink href={"/"} title={"Home"} className={"mr-4"} />
        <CustomeLink href={"/about"} title={"About"} className={"mx-4"} />
        <CustomeLink href={"/projects"} title={"Projects"} className={"ml-4"} />
      </nav>

      <nav className='hidden lg:flex items-center justify-center flex-wrap gap-6'>

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

      {isOpen ?
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between z-10 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      '>
          <nav className='flex flex-col justify-center items-center gap-2'>
            <CustomeLinkMobile href={"/"} title={"Home"} toggle={handleClick} />
            <CustomeLinkMobile href={"/about"} title={"About"} toggle={handleClick} />
            <CustomeLinkMobile href={"/projects"} title={"Projects"} toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap gap-3 mt-5'>

            <motion.a href="https://www.linkedin.com/in/amr-abdelhady-a35216184/" target="_blank" className='w-6' aria-label="Read more about Seminole tax hike"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a href="https://github.com/AmrAbdelhady1" target="_blank" className='w-6 bg-light rounded-full dark:bg-dark' aria-label="Read more about Seminole tax hike"
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

            <motion.a href="https://www.pinterest.com/aabdelhady0604/" target="_blank" className='w-6 bg-light rounded-full' aria-label="Read more about Seminole tax hike"
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
        </motion.div>
        : null
      }

      <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
        <Logo />
      </div>

    </header>
  )
}

export default Navbar