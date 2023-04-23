import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'


type Props = { href: string, title: string, className?: string, toggle:()=>void }

const CustomMobileLink: FC<Props> = ({ title, href, className, toggle }) => {
    const { asPath, push } = useRouter()

    const handleClick = async () => {
        toggle();
        await push(href)
    }

    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span
                className={
                    `h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 
                    ${asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`
                }
            >&nbsp;</span>
        </button>
    )
}

export default CustomMobileLink