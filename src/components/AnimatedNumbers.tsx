import React, { FC, useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type Props = {
    value: number
}

const AnimatedNumbers:FC<Props> = ({value}) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000
    });
    const isInView = useInView(spanRef, {once: true});


    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {

           if(spanRef.current && latest.toFixed(0) <= value) {
                spanRef.current.textContent = latest.toFixed(0);
           }
        })
    }, [springValue, value])


    return (
        <span ref={spanRef}>
            
        </span>
    )
}

export default AnimatedNumbers;
