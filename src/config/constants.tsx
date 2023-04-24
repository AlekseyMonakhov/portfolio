import {
    ArticleType,
    ArticleTypes,
    EducationItem,
    Experience,
    FeatureArticleType,
    FeatureProject, NavIcon,
    ProjectType,
    ProjectTypes,
} from '@/types'
import crypto from '../../public/images/projects/crypto-screener-cover-image.jpg'
import netflix from '../../public/images/projects/Netflix.png'
import threeJs from '../../public/images/projects/threeJs.png'
import agency from '../../public/images/projects/agency-website-cover-image.jpg'
import articlePagination from '../../public/images/articles/pagination component in reactjs.jpg'
import articleLoading from '../../public/images/articles/create loading screen in react js.jpg'
import articleModal from '../../public/images/articles/create modal component in react using react portals.png'
import smoothScroll from '../../public/images/articles/smooth scrolling in reactjs.png'
import articleFormValidation from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    PinterestIcon,
    TwitterIcon,
} from '@/components/Icons'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {BsTelegram, BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"


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
]

export const experience: Experience[] = [
    {
        time: '2021-2022',
        address: 'Odesa',
        company: 'Iambloom',
        companyLink: 'https://iambloom.com.ua/',
        work: '\n' +
            'Development of client interfaces, designing page design, working with animation, setting up API integration with Google and Facebook. Actively used Html, CSS, JS, React',
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
        img: crypto,
        link: '',
        githubLink: '',
        title: 'Crypto Screener Application',
        done: false,
    },
    {
        type: ProjectTypes.FEATURE_PROJECT,
        img: agency,
        link: '',
        githubLink: '',
        title: 'Agency Website',
        summary: 'Clone of netflix, technologies used: \n' +
            'Tailwind, Nextjs, Typescript, SWR, framer-motion, axios, zustand, next-auth, react-hook-form',
        done: false,
    },
]


export const articles: Array<FeatureArticleType | ArticleType> = [
    {
        title: 'Build A Custom Pagination Component In Reactjs From Scratch',
        summary: 'Learn how to build a custom pagination component in ReactJS from scratch.\n' +
            '    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
        time: '9 min read',
        link: '',
        img: articlePagination,
        type: ArticleTypes.FEATURE_ARTICLE
    },
    {
        title: 'Build A Custom Pagination Component In Reactjs From Scratch',
        summary: 'Learn how to build a custom pagination component in ReactJS from scratch.\n' +
            '    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.',
        time: '9 min read',
        link: '',
        img: articleLoading,
        type: ArticleTypes.FEATURE_ARTICLE
    },
    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        time: 'March 22 2023',
        link: '',
        img: articleModal,
        type: ArticleTypes.ARTICLE
    },
    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        time: 'March 22 2023',
        link: '',
        img: smoothScroll,
        type: ArticleTypes.ARTICLE
    },
    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        time: 'March 22 2023',
        link: '',
        img: articleFormValidation,
        type: ArticleTypes.ARTICLE
    },
    {
        title: 'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
        time: 'March 22 2023',
        link: '',
        img: articleModal,
        type: ArticleTypes.ARTICLE
    },
]

export const NavIcons:NavIcon[] = [
    {
        href: "https://t.me/leonidys_12",
            icon: <BsTelegram size={24} style={{color: "#0088cc"}}/>,
    },
    {
        href: "https://github.com/AlekseyMonakhov",
        icon: <AiFillGithub  size={24} className={'dark:bg-dark rounded-full bg-light'}/>,
    },
    {
        href: "https://www.linkedin.com/in/oleksii-monakhov-5b6116238/",
        icon: <AiFillLinkedin size={24} style={{color: "#0e76a8"}}/>,
    },
    {
        href: "tel:+380957336963",
        icon: <BsFillTelephoneFill size={24} style={{color: '#58E6D9'}}/>,
    },
    {
        href: "mailto:goshagriboedskii@gmail.com",
        icon: <GrMail  size={24} style={{color: '#B63E96'}}/>,
    },
]
//className={'text-base bg-light dark:bg-dark rounded-full'}