import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './lilcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] pl-16 md:w-[60%] md:pl-0 mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-base md:text-xl lg:text-2xl'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-3xl md:text-4xl lg:text-8xl mb-32 w-full text-center'>Education</h2>

            <div ref={ref} className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto relative mb-40'>
                <motion.div
                    className='absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top'
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-3 md:ml-16'>
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2017-2021"
                        place="Cairo university"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                    />
                    <Details
                        type="Online Coursework"
                        time="2016-2020"
                        place="Coursera And EdX"
                        info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                        Learning Engineering."
                    />
                </ul>
            </div>

        </div>
    )
}

export default Education