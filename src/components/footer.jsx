import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-between w-full border-t-2 border-solid border-dark font-medium text-lg px-32 py-12'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build With
                <span className='text-primary text-2xl px-1'>&#9825;</span>
                by&nbsp;
                <Link href="https://www.linkedin.com/in/amr-abdelhady-a35216184/" target='_blank' className='underline underline-offset-2'>Amr Abdelhady</Link>
            </div>
            <Link href="https://www.linkedin.com/in/amr-abdelhady-a35216184/" target='_blank' className='underline underline-offset-2'>Say Hello</Link>
        </div>
    )
}

export default Footer