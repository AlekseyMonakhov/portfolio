import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary'}
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut'}}
                exit={{x:["0%", "100%"], width:["0%", "100%"]}}
            />
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light'}
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2}}
            />
            <motion.div
                className={'fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark'}
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4}}
            />
        </>
    )
}

export default TransitionEffect
