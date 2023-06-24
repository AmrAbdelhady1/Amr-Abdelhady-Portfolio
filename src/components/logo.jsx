import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div>
        <MotionLink href='/' 
        className='w-16 h-16 bg-dark text-light text-2xl flex items-center justify-center rounded-full font-bold
        border border-solid border-transparent dark:border-light
        '
        whileHover={{
            background:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1.5, repeat: Infinity}
        }}
        >
            AA
        </MotionLink>
    </div>
  )
}

export default Logo