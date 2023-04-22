import { StaticImageData } from 'next/image'

export type EducationItem = {
    type: string,
    time: string,
    info: string,
    diplomaLink: string
    schoolName: string
}

export type Experience = {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string
}

export enum ProjectTypes {
    FEATURE_PROJECT = 'Feature project',
    PROJECT = 'Project'
}

export enum Modes {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ProjectType {
    title: string,
    type: ProjectTypes,
    img: StaticImageData,
    link: string,
    githubLink: string,
    done: boolean
}

export interface FeatureProject extends ProjectType {
    summary: string,
}

export enum ArticleTypes {
    FEATURE_ARTICLE = 'Feature Article',
    ARTICLE = 'Article'
}

export interface ArticleType {
    type: ArticleTypes,
    img: StaticImageData,
    title: string,
    time: string,
    link: string
}

export interface FeatureArticleType extends ArticleType {
    summary: string,
}


