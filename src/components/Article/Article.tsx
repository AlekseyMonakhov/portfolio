import React, { FC } from 'react'
import { ArticleType } from '@/types'
import MovingImg from '@/components/MovingImg'
import { motion } from 'framer-motion'


const Article: FC<ArticleType> = ({ img, link, title, time }) => {
    return (
        <motion.li
            className={'relative w-full p-4 py-6 my-4 rounded-xl flex items-center ' +
                'justify-between bg-light text-dark border border-solid border-dark ' +
                'border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light'}
            initial={{ y: 200 }}
            whileInView={{
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                },
            }}
            viewport={{
                once: true,
            }}
        >
            <MovingImg img={img} title={title} link={link} />
            <span className={'text-primary font-semibold pl-4 dark:text-primaryDark'}>{time}</span>
        </motion.li>
    )
}

export default Article
