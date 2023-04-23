import React from 'react'
import {motion} from 'framer-motion'
import Skill from '@/components/Skills/Skill'





const Skills = () => {
    return (
        <>
            <h2 className={'font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'}>Skills</h2>
            <div className={'w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark ' +
                'lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] ' +
                'lg:bg-circularLightLg lg:dark:bg-circularDarkLg ' +
                'md:bg-circularLightMd md:dark:bg-circularDarkMd ' +
                'sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
            }>

                <motion.div
                    whileHover={{scale: 1.05}}
                    className={'flex items-center justify-center rounded-full font-semibold bg-dark ' +
                        'text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light ' +
                        'lg:p-6 md:p-4 xs:text-xs xs:p-2'}>
                    Web
                </motion.div>

                <Skill name={"HTML"} x={"-30vw"} y={"-5vw"}/>
                <Skill name={"CSS"} x={"35vw"} y={"0vw"}/>
                <Skill name={"Javascript"} x={"20vw"} y={"20vw"}/>
                <Skill name={"Typescript"} x={"0vw"} y={"12vw"}/>
                <Skill name={"React"} x={"-20vw"} y={"-15vw"}/>
                <Skill name={"NextJS"} x={"15vw"} y={"-20vw"}/>
                <Skill name={"NodeJS"} x={"32vw"} y={"-15vw"}/>
                <Skill name={"REST/GraphQL"} x={"-5vw"} y={"-20vw"}/>
                <Skill name={"MongoDB"} x={"-25vw"} y={"10vw"}/>
                <Skill name={"Tailwind CSS"} x={"-15vw"} y={"18vw"}/>

            </div>
        </>
    )
}

export default Skills
