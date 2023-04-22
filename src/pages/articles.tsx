import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import FeatureArticle from '@/components/Article/FeatureArticle'
import { ArticleType, ArticleTypes, FeatureArticleType } from '@/types'
import { getArticles } from '@/config/helpers'
import Article from '@/components/Article/Article'

const Articles = () => {
    console.log()
    return (
        <>
            <Head>
                <title>Articles Page</title>
                <meta name={'articles page'}
                      content={'js/ts developer, front-end, back-end developer, full-stack developer'} />
            </Head>
            <main
                className={'w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'}>
                <Layout className={'pt-16'}>
                    <AnimatedText text={'Words Can Change The World!'} className={'mb-16 '} />

                    <ul className={'grid grid-cols-2 gap-16'}>
                        {getArticles<FeatureArticleType>(ArticleTypes.FEATURE_ARTICLE)
                            .map((article, index) => (
                                <FeatureArticle {...article}
                                                key={article.summary + ' ' + index} />
                            ))}

                    </ul>

                    <h2
                        className={'font-bold text-4xl w-full text-center my-16 mt-32'}>
                        All Articles</h2>

                    <ul>
                        {getArticles<ArticleType>(ArticleTypes.ARTICLE)
                            .map((article, index) => (
                                <Article key={article.title + " " + index} {...article}/>
                            ))
                        }
                    </ul>

                </Layout>
            </main>
        </>
    )
}

export default Articles
