import { motion } from 'framer-motion'
import Image from 'next/image'
import { articles } from '@/config/constants'
import { ArticleType, ArticleTypes, FeatureArticleType } from '@/types'

export const FramerImage = motion(Image)


export const getArticles = <T extends FeatureArticleType | ArticleType>(type: ArticleTypes) => {
    return articles.filter((el): el is T => type === ArticleTypes.ARTICLE ? !('summary' in el) : 'summary' in el)
}