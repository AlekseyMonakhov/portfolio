import React, { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'
import EducationDetails from '@/components/Education/EducationDetails'
import {education} from '@/config/constants'


const Education = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end'],
    })


    return (
        <div className={'mt-64'}>
            <h2 className={'font-bold text-8xl mb-32 w-full text-center'}>
                Education
            </h2>

            <div ref={containerRef} className={'w-[75%] mx-auto relative'}>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={'absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'} />

                <ul className={'w-full flex flex-col items-start justify-between ml-4'}>
                    {education.map((item) => (
                        <EducationDetails {...item} key={item.info}/>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Education
