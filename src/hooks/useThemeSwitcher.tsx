import React, { useEffect, useState } from 'react'
import { Modes } from '@/types'


const useThemeSwitcher = (): [Modes | null, React.Dispatch<React.SetStateAction<Modes | null>>] => {

    const preferDarkQuery = `(prefers-color-scheme: ${Modes.DARK})`
    const [mode, setMode] = useState<Modes | null>(null);


    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem('theme')


        const handleChange = () => {

            if (userPref) {

                let check = userPref === Modes.DARK ? Modes.DARK : Modes.LIGHT
                setMode(check)

                if (check === Modes.DARK) {
                    document.documentElement.classList.add(Modes.DARK)
                } else {
                    document.documentElement.classList.remove(Modes.DARK)
                }
            } else {
                let check = mediaQuery.matches ? Modes.DARK : Modes.LIGHT

                setMode(check)

                if (check === Modes.DARK) {
                    document.documentElement.classList.add(Modes.DARK)
                } else {
                    document.documentElement.classList.remove(Modes.DARK)
                }
            }
        }
        handleChange();
        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)

    }, [])


    useEffect(() => {

        if (mode === Modes.DARK) {
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        }
        if(mode === Modes.LIGHT){
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [mode])


    return [mode, setMode]
}

export default useThemeSwitcher
