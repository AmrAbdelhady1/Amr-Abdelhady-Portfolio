import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='absolute lg:fixed lg:left-4 lg:bottom-4 lg:top-auto lg:right-auto flex items-center justify-center overflow-hidden right-4 left-auto top-0 bottom-auto'>
            <div className='w-24 lg:w-48 h-auto flex items-center justify-center relative'>
                <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
                <Link href="mailto:amrabdelhady99@gmail.com" 
                className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
                shadow-md border-2 border-dark lg:w-20 lg:h-20 rounded-full hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light
                w-12 h-12 text-[10px]
                '
                >Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe