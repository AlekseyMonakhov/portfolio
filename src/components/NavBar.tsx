import React from 'react'
import Logo from '@/components/Logo'
import CustomLink from '@/components/CustomLink'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    PinterestIcon,
    SunIcon,
    TwitterIcon,
} from '@/components/Icons'

import { motion } from 'framer-motion'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { Modes } from '@/types'


const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()

    const changeModeHandler = () => {
        setMode((prev) => prev === Modes.DARK ? Modes.LIGHT : Modes.DARK)
    }

    return (
        <header
            className={'w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'}
        >
            <nav>
                <CustomLink href={'/'} title={'Home'} className={'mr-4'} />
                <CustomLink href={'/about'} title={'About'} className={'mx-4'} />
                <CustomLink href={'/projects'} title={'Projects'} className={'mx-4'} />
                <CustomLink href={'/articles'} title={'Articles'} className={'ml-4'} />
            </nav>

            <nav className={'flex items-center justify-center flex-wrap gap-3'}>
                <motion.a href={'https://twitter.com/'}
                          target={'_blank'}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className={'w-6'}
                >
                    <TwitterIcon className={''}/>
                </motion.a>
                <motion.a className={'w-6'}
                          href={'https://github.com/'}
                          target={'_blank'}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon className={'text-base'} />
                </motion.a>
                <motion.a className={'w-6'}
                          href={'https://linkedin.com/'}
                          target={'_blank'}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                >
                    <LinkedInIcon className={''} />
                </motion.a>
                <motion.a className={'w-6 bg-light rounded-full'}
                          href={'https://pinterest.com/'}
                          target={'_blank'}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                >
                    <PinterestIcon className={''} />
                </motion.a>
                <motion.a className={'w-6'}
                          href={'https://twitter.com/'}
                          target={'_blank'}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                >
                    <DribbbleIcon className={''} />
                </motion.a>

                <button
                    className={`ml-3 flex items-center justify-center rounded-full p-1 
                    ${mode === Modes.LIGHT ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    onClick={changeModeHandler}>
                    {mode === Modes.DARK ?
                        <SunIcon className={'fill-dark'} />
                        :
                        <MoonIcon className={'fill-dark'} />
                    }
                </button>
            </nav>

            <div className={'absolute left-[50%] top-2  translate-x-[-50%]'}>
                <Logo />
            </div>

        </header>
    )
}

export default NavBar