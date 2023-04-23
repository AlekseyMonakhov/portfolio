import React, { useRef } from 'react'

import { useScroll, motion } from 'framer-motion'
import { experience } from '@/config/constants'
import ExpDetails from '@/components/Experience/ExpDetails'


const Experience = () => {


    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "center start"]
    });

    return (
        <div className={'mt-64'}>
            <h2 className={'font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'}>
                Experience
            </h2>

            <div ref={containerRef} className={'w-[75%] mx-auto relative lg:w-[90%] md:w-full'}>

                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'} />

                <ul className={'w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '}>
                    {experience.map((el) => (
                        <ExpDetails {...el} key={el.work}/>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Experience
