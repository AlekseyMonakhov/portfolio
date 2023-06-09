import React, { useState } from 'react'
import Logo from '@/components/Logo'
import CustomLink from '@/components/NavBar/CustomLink'
import { MoonIcon, SunIcon } from '@/components/Icons'

import { AnimatePresence, motion } from 'framer-motion'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { Modes } from '@/types'
import CustomMobileLink from '@/components/NavBar/CustomMobileLink'
import { NavIcons } from '@/config/constants'


const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    const changeModeHandler = () => {
        setMode((prev) => prev === Modes.DARK ? Modes.LIGHT : Modes.DARK)
    }

    return (
        <header
            className={'w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'}
        >

            <button
                onClick={handleClick}
                className={'flex-col justify-center items-center hidden lg:flex'}
            >
                <span
                    className={`bg-dark dark:bg-light block transition duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span
                    className={`bg-dark dark:bg-light block transition duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100'}`}></span>
                <span
                    className={`bg-dark dark:bg-light block transition duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>


            <div className={'w-full flex justify-between items-center lg:hidden'}>
                <nav>
                    <CustomLink href={'/'} title={'Home'} className={'mr-4'} />
                    <CustomLink href={'/about'} title={'About'} className={'mx-4'} />
                    <CustomLink href={'/projects'} title={'Projects'} className={'mx-4'} />
                    <CustomLink href={'/articles'} title={'Articles'} className={'ml-4'} />
                </nav>

                <nav className={'flex items-center justify-center flex-wrap gap-3'}>
                    {NavIcons.map((link, index) => (
                        <motion.a
                            key={link.href + ' ' + index}
                            href={link.href}
                            target={'_blank'}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-6`}
                        >
                            {link.icon}
                        </motion.a>
                    ))}


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
            </div>


            <AnimatePresence>
                {isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                        transition={{ ease: 'easeInOut', type: 'spring', stiffness: 100 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={'min-w-[70vw] flex flex-col justify-between z-30 ' +
                            'items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' +
                            'bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'}>
                        <nav className={'flex items-center flex-col justify-center'}>
                            <CustomMobileLink
                                href={'/'}
                                title={'Home'}
                                toggle={handleClick} />
                            <CustomMobileLink
                                href={'/about'}
                                title={'About'}
                                toggle={handleClick} />
                            <CustomMobileLink
                                href={'/projects'}
                                title={'Projects'}
                                toggle={handleClick} />
                            <CustomMobileLink
                                href={'/articles'}
                                title={'Articles'}
                                toggle={handleClick} />
                        </nav>

                        <nav
                            className={'flex items-center justify-center flex-wrap gap-3 mt-2 sm:gap-1'}>

                            {NavIcons.map((link, index) => (
                                <motion.a
                                    key={link.href + ' ' + index}
                                    href={link.href}
                                    target={'_blank'}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-6 text-light dark:text-dark`}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}

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
                    </motion.div>

                    : null
                }
            </AnimatePresence>


            <div className={'absolute left-[50%] top-2  translate-x-[-50%]'}>
                <Logo />
            </div>

        </header>
    )
}

export default NavBar
