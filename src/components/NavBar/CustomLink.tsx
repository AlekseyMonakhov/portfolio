import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'


type Props = { href: string, title: string, className?: string }

const CustomLink: FC<Props> = ({ title, href, className }) => {
    const { asPath } = useRouter()


    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={
                    `h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] ease duration-300 
                    ${asPath === href ? 'w-full' : 'w-0'} dark:bg-light`
                }
            >&nbsp;</span>
        </Link>
    )
}

export default CustomLink