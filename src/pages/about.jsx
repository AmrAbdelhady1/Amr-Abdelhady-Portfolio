/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Animatedtext from '@/components/animatedtext'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import TransitionEffect from '@/components/transitioneffect'
import { useStateContext } from '@/context/statecontext'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value]);

  return <span ref={ref}></span>
}

const About = () => {

  const { mode } = useStateContext();

  return (
    <>
      <Head>
        <title>Amr Abdelhady | About Page</title>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center py-32'>
        <Animatedtext text={"Passion Fuels Purpose!"} className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start font-medium'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p>
              Hi, I'm <span className='font-bold'>Amr Abdelhady</span>, a web developer with a passion for creating beautiful, functional,
              and user-centered digital experiences. With 1 years of experience in the field. I am always looking for
              new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='my-4'>
              I believe that design is about more than just making things look pretty – it's about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>
            <p>
              Whether I'm working on a website, mobile app, or
              other digital product, I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>

          <div className={`col-span-3 relative h-max rounded-2xl border-2 border-dark bg-light dark:bg-dark dark:border-light p-8
           ${mode === "dark" ? "shadow-box-light" : "shadow-box"}
           `}>
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' /> */}
            <Image src={profilePic} alt="amr-abdelhady" className='w-full h-auto rounded-2xl'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
          </div>

          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={3} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                satisfied clients
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                projects completed
              </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={1} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                years of experience
              </h2>
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />

      </main>
    </>
  )
}

export default About