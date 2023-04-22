import React, { FC, MouseEvent, useRef } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useAnimationControls, useMotionValue } from 'framer-motion'
import { FramerImage } from '@/config/helpers'

type Props = {
    title: string,
    img: StaticImageData,
    link: string
}


const MovingImg: FC<Props> = ({ img, title, link }) => {

    const imgRef = useRef<HTMLImageElement>(null)
    const controls = useAnimationControls();

    const handleMouse = (e: MouseEvent<HTMLAnchorElement>) => {
        if (imgRef.current) {
            controls.set({x: e.pageX})
            controls.set({y: -10})
            controls.set({display: 'inline-block'})
        }
    }

    const handleMouseLeave = async(e: MouseEvent<HTMLAnchorElement>) => {
        if (imgRef.current) {

           await controls.start({
               opacity: 0,
               y: -50,
               transition: {
                   duration: 0.25
               }
           })
            controls.set({display: "none"})
        }
    }

    return (
        <Link href={link} target={'_blank'}
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
        >
            <h2 className={'capitalize text-xl font-semibold hover:underline'}>{title}</h2>
            <FramerImage
                initial={{
                    opacity:0,
                    x: 1
                }}
                animate={controls}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.2
                    },
                }}
                ref={imgRef}
                src={img}
                alt={title}
                className={'z-10 w-96 h-auto hidden absolute rounded-lg'} />
        </Link>
    )
}

export default MovingImg
