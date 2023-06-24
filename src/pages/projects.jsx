import React from 'react'
import Head from 'next/head'
import Animatedtext from '@/components/animatedtext'
import Link from 'next/link'
import Image from 'next/image'
import ecom from '../../public/images/projects/ecom.png'
import portfolio from '../../public/images/projects/portfolio.png'
import { GithubIcon } from '@/components/icons'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/transitioneffect'

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-dark bg-light shadow-2xl p-12 relative'>

      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>

        <span className='text-primary text-xl font-medium'>{type}</span>

        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark'>{summary}</p>

        <div className='mt-2 flex items-center'>

          <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>

          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-medium'
          >Visit Project</Link>
        </div>

      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className='w-full flex flex-col gap-4 items-center justify-center rounded-2xl border border-dark bg-light shadow-2xl p-6 relative'>

      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between'>
        <span className='text-primary text-xl font-medium'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank'
            className='text-lg font-medium underline'
          >Visit</Link>
          <Link href={github} target='_blank' className='w-8'> <GithubIcon /> </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Amr Abdelhady | Projects Page</title>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-40 flex flex-col items-center justify-center pt-20'>
        <Animatedtext text="Imagination Trumps Knowledge!" />
        <div className='grid grid-cols-12 gap-24 gap-y-32 mt-20'>
          <div className='col-span-12'>
            <FeatureProject
              type="E-commerce Platform"
              title="Ecom Store"
              summary="working on a big e-commerce platform in Kuwait, making two dashboard super for our client and admin
              dashboard for his customers and the admin makes his own store and starts selling with dynamic themes for
              every admin."
              img={ecom}
              link="https://ecom.io/"
              github="https://ecom.io/"
            />
          </div>
          <div className='col-span-6'>
            <Project
              type="Portfolio Website"
              title="React Portfolio Website"
              img={portfolio}
              link="https://ecom.io/"
              github="https://ecom.io/"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default projects