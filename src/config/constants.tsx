import {
    ArticleType,
    ArticleTypes,
    EducationItem,
    Experience,
    FeatureArticleType,
    FeatureProject,
    NavIcon,
    ProjectType,
    ProjectTypes,
    User,
    UserSkill,
} from '@/types'
import crypto from '../../public/images/projects/crypto-screener-cover-image.jpg'
import viar from '../../public/images/projects/viar.jpg'
import tibica from '../../public/images/projects/tibica.jpg'
import netflix from '../../public/images/projects/Netflix.png'
import threeJs from '../../public/images/projects/threeJs.png'
import agency from '../../public/images/projects/agency-website-cover-image.jpg'
import articlePagination from '../../public/images/articles/pagination component in reactjs.jpg'
import articleLoading from '../../public/images/articles/create loading screen in react js.jpg'
import articleModal
    from '../../public/images/articles/create modal component in react using react portals.png'
import smoothScroll from '../../public/images/articles/smooth scrolling in reactjs.png'
import articleFormValidation
    from '../../public/images/articles/form validation in reactjs using custom react hook.png'

import userPhoto from '../../public/images/profile/Frame.png'
import mainScreenImg from '../../public/images/profile/developer-pic-1.png'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsFillTelephoneFill, BsTelegram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import React from 'react'


export const user: User = {
    name: 'Oleksiy',
    lastName: 'Monakhov',
    contacts: {
        email: 'goshagriboedskii@gmail.com',
        phone: '380957336963',
        githubUrl: 'https://github.com/AlekseyMonakhov',
        linkedinUrl: 'https://www.linkedin.com/in/alex-monakhov-5b6116238/',
        telegramProfileUrl: 'https://t.me/Oleskyi',
        djinniProfile: 'https://djinni.co/q/126eea7be4/',
    },
    userPhotoImg: userPhoto,
    mainScreenImg: mainScreenImg,
    certificatesNumberField: 12,
    satisfiedClientsField: 50,
    yearsOfExperience: 5,
    position: "Full Stack Developer",
    userResume: './Oleksii__Monakhov.pdf',
}

export const education: EducationItem[] = [
    {
        type: 'Front-end Basic',
        info: 'Development of the visible part of any site is called Front-end, and this is the fastest growing area of ​​programming. No modern website and web application can do without a Front-end developer.\n' +
            '\n' +
            'As part of the Front-end Basic course, students with no development experience learn HTML and CSS, learn how to make websites. After the successful completion of the course, students receive enough knowledge and skills to design a site of any complexity.\n' +
            '\n' +
            'COURSE OBJECTIVES\n' +
            'Implement design of any complexity into layout\n' +
            'Make websites that display equally well on any device\n' +
            'Notice important little things and write code that is easy to extend and maintain\n' +
            'Learn to understand the structure of web pages',
        time: '2021-2022',
        diplomaLink: 'https://certificate.ithillel.ua/view/78690022',
        schoolName: 'Hillel It School',
    },
    {
        type: 'Front-end Pro',
        info: 'The course is designed for deep learning of the JavaScript programming language and the React library, which is used to create complex Front-end applications.\n' +
            '\n' +
            'The popular JavaScript language is used in the creation of web applications to add interactivity to web pages. Writing code in React is very similar to working in HTML, which makes it easy to start coding without missing the syntax. One of the main features of React is freedom of action.\n' +
            '\n' +
            'On the course, you will get acquainted with the principles of OOP, DOM, REST API and gain practical skills in creating applications using the react-stack, which will allow you to apply for the position of Junior Front-end Developer. COURSE OBJECTIVES\n' +
            'Learn to interact with servers using JavaScript\n' +
            '\n' +
            'Master OOP\n' +
            '\n' +
            'Learn to work with REST API\n' +
            '\n' +
            'Learn all the features of the React library\n' +
            '\n' +
            'Learn all the nuances: from how the DOM works to how to build an application with Webpack',
        time: '2022-2022',
        diplomaLink: 'https://certificate.ithillel.ua/view/67882973',
        schoolName: 'Hillel It School',
    },
    {
        type: 'React',
        info: 'React is one of the most popular libraries for building complex front-end applications. Writing code in React is very similar to working in HTML, which makes it easy to start coding without missing the syntax. One of the main features of React is freedom of action. There are a huge number of approaches to building applications with it.\n' +
            '\n' +
            'COURSE OBJECTIVES\n' +
            'Learn all the features of the library\n' +
            'Develop a project, analyze typical problems of a single-page application\n' +
            'Explore the technology stack that builds the best applications that run on the web',
        time: '2022-2023',
        diplomaLink: 'https://certificate.ithillel.ua/view/39062958',
        schoolName: 'Hillel It School',
    },
    {
        type: 'Understanding TypeScript',
        info: 'Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!',
        time: '2022',
        diplomaLink: 'https://www.udemy.com/certificate/UC-a4faa4af-d871-4f20-8725-9fcddcbce2af/',
        schoolName: 'Udemy',
    },
    {
        type: 'Next.js & React - The Complete Guide (incl. Two Paths!)',
        info: 'Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-38fd9bb7-015e-4886-a46c-c56265d156b9/',
        schoolName: 'Udemy',
    },
    {
        type: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
        info: 'Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-101c9a8f-ee0d-45fe-b721-8a06b17bcf44/',
        schoolName: 'Udemy',
    },
    {
        type: 'Tailwind CSS From Scratch | With Multiple Projects',
        info: 'Learn Utility-first Tailwind CSS framework from scratch & Build Multiple Projects using Tailwind CSS with best practice',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-5053ae71-5dc6-4742-8ffd-4b34cb6d6905/',
        schoolName: 'Udemy',
    },
    {
        type: 'Redux, React Redux & Redux Toolkit RTK Course 2023',
        info: 'Master Redux, Redux Toolkit core library, React Redux and Redux Toolkit by building 7 projects',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-4fadbde6-069c-4d94-8d9d-fb27954ebfad/',
        schoolName: 'Udemy',
    },
    {
        type: 'NestJS: The Complete Developer\'s Guide (Oct 2023)',
        info: 'Master NestJS, the Node framework that makes building enterprise-grade, scalable NodeJS apps a breeze!',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-05507569-2230-426a-8be5-b434090d4f7e/',
        schoolName: 'Udemy',
    },
    {
        type: 'Next.js by Example (Oct 2023)',
        info: 'Learn Next.js 13.4+ version from the ground up by building production-ready, fullstack ReactJS apps with NextJS',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-3d5394ca-c5a7-4235-9091-f93efd089e98/',
        schoolName: 'Udemy',
    },
    {
        type: 'Microfrontends with React: A Complete Developer\'s Guide (Sep 2023)',
        info: 'Build incredibly scalable apps with a microfrontend architecture. Learn how to use Module Federation with ReactJS',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-597681c8-328e-4f0c-8263-f2dcb612b792/',
        schoolName: 'Udemy',
    },
    {
        type: 'MongoDB - The Complete Developer\'s Guide 2023 (Aug 2023)\n',
        info: 'Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-2138d1ef-4640-44e8-b54b-316371765147/',
        schoolName: 'Udemy',
    },
    {
        type: 'Regular Expressions for Beginners and Beyond! With Exercises (Jul 2023)\n',
        info: 'Learn Regular Expressions (Regex) for Javascript Python PHP PERL Ruby Unix etc with Exercises Step by Step and Easy way',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-5d03cb7e-e13e-453b-88d5-8b7b28bf260b/',
        schoolName: 'Udemy',
    },
    {
        type: 'Remix.js - The Practical Guide (Jul 2023)',
        info: 'Learn Remix.js from the ground up by building a fullstack app with Remix, React, Prisma, and PostgreSQL',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-a268fdd1-9d73-47db-b486-494b7a5b80f6/',
        schoolName: 'Udemy',
    },
    {
        type: 'Progressive Web Apps (PWA) - The Complete Guide (Jun 2023)',
        info: 'Build a Progressive Web App (PWA) that feels like an iOS & Android App, using Device Camera, Push Notifications and more',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-cc7cb7b0-729f-43ed-a5ac-e95fbff0aba6/',
        schoolName: 'Udemy',
    },
    {
        type: 'React Testing Library and Jest: The Complete Guide (Jun 2023)',
        info: 'Master React Testing Library and Jest to build bulletproof React apps with confidence',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-18d96576-50ec-41d3-89db-85357eed3a9e//',
        schoolName: 'Udemy',
    },
    {
        type: 'GraphQL by Example (May 2023)',
        info: 'Learn GraphQL by writing full-stack JavaScript applications with Node.js, Express, Apollo Server, React, Apollo Client',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-ded78f8b-1486-4057-9f9a-553ad9190cc2/',
        schoolName: 'Udemy',
    },
    {
        type: 'Typescript',
        info: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.',
        time: '2023',
        diplomaLink: 'https://certificate.ithillel.ua/view/29451718',
        schoolName: 'Hillel it School',
    },
    {
        type: 'C#',
        info: 'C# is a modern, general-purpose, object-oriented programming language developed by Microsoft and approved by European Computer Manufacturers Association (ECMA) and International Standards Organization (ISO). C# was developed by Anders Hejlsberg and his team during the development of .Net Framework. C# is designed for Common Language Infrastructure (CLI), which consists of the executable code and runtime environment that allows use of various high-level languages on different computer platforms and architectures.',
        time: '2023',
        diplomaLink: 'https://certificate.ithillel.ua/view/21808156',
        schoolName: 'Hillel it School',
    },
    {
        type: 'RxJS',
        info: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-6925438c-8b7d-455a-be67-fa4fa0b3c69e/',
        schoolName: 'Udemy',
    },
    {
        type: 'Testing Nextjs with Jest, React Testing Library and Cypress (Apr 2023)',
        info: 'Learn how to test Next.js applications using Jest, React Testing Library and Cypress',
        time: '2023',
        diplomaLink: 'https://www.udemy.com/certificate/UC-49da7591-33a2-4319-a87a-eaf9c27fbf33/',
        schoolName: 'Udemy',
    }
]

export const experience: Experience[] = [
    {
        time: '2020-2022',
        address: 'Odesa',
        company: 'Iambloom',
        companyLink: 'https://iambloom.com.ua/',
        work: '\n' +
            'Development of client interfaces, designing page design, working with animations, creating CRM systems, working with React, Typescript, Redux for building CRM system. Creating perfomant frontend applications.',
        position: 'Front-end Developer',
    },
    {
        time: '2022-2023',
        address: 'Odesa',
        company: 'Perfsys',
        companyLink: 'https://perfsys.com/',
        work: 'Creating user interfaces, landing pages, CRM systems, working with graphics, animations, working with React, Typescript, ReactQuery, RtkQuery, SWR',
        position: 'Front-end Developer',
    },
    {
        time: '2023-2024',
        address: 'Kishinev',
        company: 'Fusion Works',
        companyLink: 'https://fusion.works/',
        work: 'Upgraded Nextjs version from 12.2 to 13.4. Migrated from css/scss to storybook on project. Implemented Microfrontend architecture on project using Module Federation. Worked with React, Vue, Sevlte in microfrontend architecture.',
        position: 'Full Stack Developer',
    },
    {
        time: '2024-now',
        address: 'Remote',
        company: 'Playtech',
        companyLink: 'https://www.playtech.com/',
        work: 'Upgraded React version from 16.1 to 18.3. Rewritting project to MUI components. Moved From React router 5.2 to 6.4 approach. Upgraded http1.1 to http2 between microservices and fronted and balancer. Optimized db perfomance by creating indexes and bring Redis as a cache layer. Using Redis as event bus for microservices(Redis Streams). Code refactor and perf optimization.',
        position: 'Full Stack Developer',
    },
]


export const projects: Array<FeatureProject | ProjectType> = [
    {
        type: ProjectTypes.FEATURE_PROJECT,
        img: netflix,
        link: 'https://netflix-ten-ecru.vercel.app/',
        githubLink: 'https://github.com/AlekseyMonakhov/netflix',
        title: 'Netflix clone',
        summary: 'Clone of netflix, technologies used: \n' +
            'Tailwind, Nextjs, Typescript, SWR, framer-motion, axios, zustand, next-auth, react-hook-form',
        done: true,
    },
    {
        type: ProjectTypes.PROJECT,
        img: threeJs,
        link: 'https://three-js-rose.vercel.app/',
        githubLink: 'https://github.com/AlekseyMonakhov/threeJs',
        title: 'T-ShirtGenerator',
        done: true,
    },
    {
        type: ProjectTypes.PROJECT,
        img: tibica,
        link: 'https://tibica.io/',
        githubLink: '',
        title: 'Tibica',
        done: true,
    },
    {
        type: ProjectTypes.PROJECT,
        img: viar,
        link: 'https://viar.live/',
        githubLink: '',
        title: 'Viar-Live',
        done: true,
    },
]


export const articles: Array<FeatureArticleType | ArticleType> = [
    {
        title: 'How animation works in browsers',
        summary: 'In this article, I will tell you how animation works in browsers, what types of animation exist, and how to use them in your projects.',
        time: '9 min read',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%8F%D0%BA-%D0%BF%D1%80%D0%B0%D1%86%D1%8E%D1%94-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%8F-%D0%BC%D0%B8-%D0%B2-%D0%BC%D0%B8%D0%BD%D1%83%D0%BB%D0%BE%D0%BC%D1%83-%D0%B4%D0%BE%D0%BF%D0%B8%D1%81%D1%96-activity-7133052162313469953-d14v?utm_source=share&utm_medium=member_desktop',
        img: articlePagination,
        type: ArticleTypes.FEATURE_ARTICLE,
    },
    {
        title: 'How browsers render a website',
        summary: 'In this article, I will tell you how browsers render a website, what stages of rendering exist, and how to use them in your projects.',
        time: '9 min read',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%8F%D0%BA-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%B8%D1%82%D1%8C-%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83-1-%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-activity-7132350608119934976-jbGA?utm_source=share&utm_medium=member_desktop',
        img: articleLoading,
        type: ArticleTypes.FEATURE_ARTICLE,
    },
    {
        title: 'How Js works in browsers',
        time: 'March 22 2023',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%8F%D0%BA-%D0%BF%D1%80%D0%B0%D1%86%D1%8E%D1%94-%D0%B4%D0%B6%D0%B0%D0%B2%D0%B0%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82-%D1%83-%D0%BC%D0%B8%D0%BD%D1%83%D0%BB%D0%BE%D0%BC%D1%83-%D0%B4%D0%BE%D0%BF%D0%B8%D1%81%D1%96-activity-7130903110645911554-U-4p?utm_source=share&utm_medium=member_desktop',
        img: articleModal,
        type: ArticleTypes.ARTICLE,
    },
    {
        title: 'What is compilation and interpretation',
        time: 'March 22 2023',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%89%D0%BE-%D1%82%D0%B0%D0%BA%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D1%96%D0%BB%D1%8F%D1%86%D1%96%D1%8F-%D1%82%D0%B0-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BF%D1%80%D0%B5%D1%82%D0%B0%D1%86%D1%96%D1%8F-activity-7130548373857681410-ReQR?utm_source=share&utm_medium=member_desktop',
        img: smoothScroll,
        type: ArticleTypes.ARTICLE,
    },
    {
        title: 'What is this in js',
        time: 'March 22 2023',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%89%D0%BE-%D1%82%D0%B0%D0%BA%D0%B5-this-%D1%86%D0%B5-%D0%BF%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BD%D0%B0-%D0%B7%D0%BE%D0%B2%D0%BD%D1%96%D1%88%D0%BD%D1%94-activity-7129567870149087232-4Sn5?utm_source=share&utm_medium=member_desktop',
        img: articleFormValidation,
        type: ArticleTypes.ARTICLE,
    },
    {
        title: 'How to initialize variables in js',
        time: 'March 22 2023',
        link: 'https://www.linkedin.com/posts/oleksii-monakhov-5b6116238_%D1%8F%D0%BA%D1%96-%D1%94-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B8-%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D1%88%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B7%D0%BC%D1%96%D0%BD%D0%BD%D0%BE%D1%97-%D0%B7%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87%D0%B0%D0%B2-activity-7127327652603936769-O_Nm?utm_source=share&utm_medium=member_desktop',
        img: articleModal,
        type: ArticleTypes.ARTICLE,
    },
]

export const NavIcons: NavIcon[] = [
    {
        href: user.contacts.telegramProfileUrl,
        icon: <BsTelegram size={24} />,
    },
    {
        href: user.contacts.githubUrl,
        icon: <AiFillGithub size={24} />,
    },
    {
        href: user.contacts.linkedinUrl,
        icon: <AiFillLinkedin size={24} />,
    },
    {
        href: `tel:${user.contacts.phone}`,
        icon: <BsFillTelephoneFill size={24} />,
    },
    {
        href: `mailto:${user.contacts.email}`,
        icon: <GrMail size={24} />,
    },
]

export const userSkills: UserSkill[] = [
    {
        name: 'CSS',
        position: {
            x: 20,
            y: 0,
        },
    },
    {
        name: 'Javascript',
        position: {
            x: 20,
            y: 15,
        },
    },
    {
        name: 'Typescript',
        position: {
            x: 0,
            y: 12,
        },
    },
    {
        name: 'React',
        position: {
            x: -20,
            y: -15,
        },
    },
    {
        name: 'NextJS',
        position: {
            x: 15,
            y: -20,
        },
    },
    {
        name: 'NodeJS',
        position: {
            x: 25,
            y: -15,
        },
    },
    {
        name: 'REST/GraphQL',
        position: {
            x: -5,
            y: -10,
        },
    },
    {
        name: 'MongoDB',
        position: {
            x: -25,
            y: 10,
        },
    },
    {
        name: 'Tailwind CSS',
        position: {
            x: -15,
            y: 18,
        },
    },
]
