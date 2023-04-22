import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { projects } from '@/config/constants'
import { FeatureProject, ProjectTypes } from '@/types'
import FeaturedProject from '@/components/Project/FeaturedProject'
import Project from '@/components/Project/Project'


const Projects = () => {
    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name='description' content='Generated by create next app' />
            </Head>
            <main className={'w-full mb-16 flex flex-col items-center justify-center dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text={'Imagination Trumps Knowledge!'} className={'mb-16'} />

                    <div className={'grid grid-cols-12 gap-24 gap-y-32'}>
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
                                        <div className={'col-span-6'}
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