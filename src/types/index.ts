import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

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

export type NavIcon = {
    href: UserContacts[keyof UserContacts],
    icon: ReactNode,
}

export interface User {
    name: string,
    lastName: string,
    contacts: UserContacts,
    userPhotoImg:StaticImageData,
    mainScreenImg:StaticImageData,
    satisfiedClientsField: number,
    certificatesNumberField: number,
    yearsOfExperience:number,
    userResume: string,
    position: string
}

interface UserContacts {
    email: string,
    phone: string,
    linkedinUrl: string,
    githubUrl:string,
    telegramProfileUrl: string,
    djinniProfile: string
}

export interface UserSkill {
    name: string,
    position: {
        x: number,
        y: number
    }
}

