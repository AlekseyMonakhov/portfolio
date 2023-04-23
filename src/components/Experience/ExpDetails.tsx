import React, { FC, memo, useRef } from 'react'
import {motion} from 'framer-motion'
import LiIcon from '@/components/LiIcon'
import { Experience } from '@/types'



const ExpDetails: FC<Experience> = ({ address, company, companyLink, time, work, position }) => {
    const liRef = useRef<HTMLLIElement>(null);

    return (
        <li ref={liRef} className={'my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'}>
            <LiIcon reference={liRef}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.5,
                    type:'spring'
                }}
            >
                <h3 className={'capitalize font-bold text-2xl sm:text-xl xs:text-lg'}>
                    {position}&nbsp;
                    <a
                        className={'text-primary capitalize dark:text-primaryDark'} target={'_blank'}
                        href={companyLink}>@{company}
                    </a>
                </h3>
                <span className={'capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'}>
                    {time} | {address}
                </span>
                <p className={'font-medium w-full md:text-sm'}>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

export default memo(ExpDetails)
