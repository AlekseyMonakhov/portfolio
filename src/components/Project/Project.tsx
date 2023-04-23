import React, { FC } from 'react'
import { ProjectType } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { FramerImage } from '@/config/helpers'


const Project: FC<ProjectType> = ({ img, link, githubLink, type, title, done }) => {
    return (
        <article
            className={'w-full h-full flex flex-col items-center justify-center' +
                ' rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light ' +
                'xs:p-4'}>

            <div
                className={'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light ' +
                    'md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'} />

            {done ?
                <Link href={link} target={'_blank'}
                      className={'w-full flex-1 cursor-pointer overflow-hidden rounded-lg relative'}>
                    <FramerImage src={img} alt={title}
                                 className={'w-full'}
                                 whileHover={{ scale: 1.05 }}
                                 transition={{ duration: 0.2 }} />
                </Link>
                :
                <div className={'w-full flex-1 cursor-pointer overflow-hidden rounded-lg'}>
                    <Image src={img} alt={title} className={'w-full'} />
                    <div
                        className={'absolute z-10 top-0 left-0 flex justify-center items-center w-full h-full bg-dark/70 rounded-[0.75rem]'}>
                        <h3 className={'text-light text-6xl font-bold selection:bg-red-500 selection:underline lg:text-3xl md:text-2xl'}>In
                            Process</h3>
                    </div>
                </div>
            }

            <div className={'w-full flex flex-col items-start justify-between mt-4'}>
                <span className={'text-primary font-medium text-2xl dark:text-primaryDark lg:text-lg md:text-base'}>{type}</span>
                <Link href={link} target={'_blank'}
                      className={'underline-offset-2 hover:underline'}>
                    <h2 className={'my-2 w-full text-left text-3xl font-bold lg:text-2xl'}>{title}</h2>
                </Link>

                <div className={'w-full mt-2 flex items-center justify-between'}>
                    <Link href={link} target={'_blank'}
                          className={'ml-4 text-lg font-semibold underline md:text-base'}>
                        Visit
                    </Link>
                    <Link href={githubLink} target={'_blank'} className={'w-8 md:6'}>
                        <GithubIcon className={''} />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Project
