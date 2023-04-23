import React, { FC } from 'react'
import { FeatureProject } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { FramerImage } from '@/config/helpers'


const FeaturedProject: FC<FeatureProject> = ({
                                                 img,
                                                 link,
                                                 githubLink,
                                                 type,
                                                 title,
                                                 done,
                                                 summary,
                                             }) => {
    return (
        <article
            className={'w-full flex items-center justify-between' +
                'rounded-br-2xl rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl' +
                ' relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'}>

            <div
                className={'absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light ' +
                    'xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'} />

            {done ?
                <Link href={link} target={'_blank'}
                      className={'w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'}>
                    <FramerImage src={img} alt={title}
                                 className={'w-full'}
                                 whileHover={{ scale: 1.05 }}
                                 transition={{ duration: 0.2 }}
                                 priority
                                 sizes={"(max-width:768px) 100vw " +
                                     "(max-width:1200px) 50vw " +
                                     "50vw"}
                    />
                </Link>
                :
                <div className={'w-full flex-1 cursor-pointer overflow-hidden rounded-lg'}>
                    <Image src={img} alt={title} className={'w-full h-auto'} />
                    <div
                        className={'absolute z-10 top-0 left-0 flex justify-center items-center w-full h-full bg-dark/70 rounded-[1.3rem]'}>
                        <h3 className={'text-light text-6xl font-bold selection:bg-red-500 selection:underline lg:text-3xl md:text-2xl'}>In
                            Process</h3>
                    </div>
                </div>
            }

            <div className={'w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'}>
                <span
                    className={'text-primary font-medium text-xl dark:text-primaryDark xs:text-base'}>{type}</span>
                <Link href={link} target={'_blank'}
                      className={'underline-offset-2 hover:underline'}>
                    <h2 className={'my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'}>{title}</h2>
                </Link>
                <p className={'my-2 font-medium text-dark dark:text-light sm:text-sm'}>{summary}</p>

                <div className={'mt-2 flex items-center'}>
                    <Link href={githubLink} target={'_blank'} className={'w-10'}>
                        <GithubIcon className={''} />
                    </Link>
                    <Link href={link}
                          target={'_blank'}
                          className={'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border border-solid ' +
                              'dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light ' +
                              'sm:px-4 sm:text-base'}>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject
