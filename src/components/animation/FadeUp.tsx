"use client"

import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

function FadeUp({children} : {children: ReactNode}) {
	return (
		<motion.div
			transition={{
				duration:1,
				type: 'spring',
				bounce: 0.2,
				damping: 10,
				mass:0.5,
				stiffness: 100,
			}}
		>
			{children}
		</motion.div>
	)
}

export default FadeUp