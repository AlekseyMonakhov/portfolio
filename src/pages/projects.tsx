import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { projects } from '@/config/constants'
import { FeatureProject, ProjectTypes } from '@/types'
import FeaturedProject from '@/components/Project/FeaturedProject'
import Project from '@/components/Project/Project'
import TransitionEffect from '@/components/TransitionEffect'


const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name='description' content='Generated by create next app' />
            </Head>
            <TransitionEffect/>
            <main className={'w-full mb-16 flex flex-col items-center justify-center dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text={'Imagination Trumps Knowledge!'} className={'mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl'} />

                    <div className={'grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'}>
                        {projects.map((project, index) => {
                            switch (project.type) {
                                case ProjectTypes.FEATURE_PROJECT:
                                    return (
                                        <div className={'col-span-12'}
                                             key={project.title + ' ' + index}>
                                            <FeaturedProject
                                                {...project as FeatureProject}
                                            />
                                        </div>
                                    )
                                default:
                                    return (
                                        <div className={'col-span-6 sm:col-span-12'}
                                             key={project.title + ' ' + index}>
                                            <Project
                                                {...project}
                                            />
                                        </div>
                                    )
                            }
                        })}

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Projects
