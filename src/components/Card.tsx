"use client"

import React from 'react'

type CardProps = {
	className?: string,
	children: React.ReactNode,
}

import { motion } from 'framer-motion'

function Card({children, className} : CardProps) {
	return (
		<motion.div
			className={`
				p-8
				rounded-[2.25rem]
				shadow-neumorphism-flat
				overflow-hidden
				${className && className}
			`}
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
		>
			{children}
		</motion.div>
	)
}

export default Card