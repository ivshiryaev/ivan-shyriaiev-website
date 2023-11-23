'use client'

import { motion } from 'framer-motion'

type Props = {
	className?: string,
	children: React.ReactNode,
}

function Card({children, className} : Props) {
	return (
		<motion.div
			className={`
				w-full
				rounded-[48px]
				overflow-hidden
				${className && className}
			`}
			initial={{
				y: 50
			}}
			whileInView={{
				y:0
			}}
			viewport={{
				once: true
			}}
		>
			{children}
		</motion.div>
	)
}

export default Card