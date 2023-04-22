import React, { FC } from 'react'
import { motion } from 'framer-motion'

type SkillProps = {
    name: string,
    x: string,
    y: string
}


const Skill: FC<SkillProps> = ({ y, x, name }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{
                x: x,
                y: y,
                transition: {
                    duration: 1.5,
                },
            }}
            viewport={{ once: true }}
            className={'flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'}>
            {name}
        </motion.div>
    )
}

export default Skill
