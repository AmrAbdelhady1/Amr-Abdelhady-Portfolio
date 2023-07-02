import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:px-32 items-center justify-between w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg px-8 py-12'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With
                <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                by&nbsp;
                <Link href="mailto:amrabdelhady99@gmail.com" className='underline underline-offset-2'>Amr Abdelhady</Link>
            </div>
            <Link href="https://www.linkedin.com/in/amr-abdelhady-a35216184/" target='_blank' className='underline underline-offset-2'>Say Hello</Link>
        </div>
    )
}

export default Footer