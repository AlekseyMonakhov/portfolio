import React, { FC } from 'react'
import { FeatureArticleType } from '@/types'
import Link from 'next/link'
import { FramerImage } from '@/config/helpers'


const FeatureArticle: FC<FeatureArticleType> = ({ img, link, title, time, type, summary }) => {
    return (
        <li className={'relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-dark'}>

            <div
                className={'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'} />

            <Link
                target={'_blank'}
                href={link}
                className={'w-full inline-block cursor-pointer overflow-hidden rounded-lg'}
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className={'w-full'}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className={'capitalize text-2xl font-bold my-2 hover:underline'}>{title}</h2>
            </Link>
            <p className={'text-sm mb-2'}>{summary}</p>
            <span className={'text-primary font-semibold dark:text-primaryDark'}>{time}</span>
        </li>
    )
}

export default FeatureArticle
