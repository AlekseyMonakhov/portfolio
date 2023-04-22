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
            <h2 className={'font-bold text-8xl mb-32 w-full text-center'}>
                Experience
            </h2>

            <div ref={containerRef} className={'w-[75%] mx-auto relative'}>

                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'} />

                <ul className={'w-full flex flex-col items-start justify-between ml-4'}>
                    {experience.map((el) => (
                        <ExpDetails {...el} key={el.work}/>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Experience
