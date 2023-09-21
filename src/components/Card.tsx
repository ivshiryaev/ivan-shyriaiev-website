import React from 'react'

type CardProps = {
	className?: string,
	children: React.ReactNode,
}

function Card({children, className} : CardProps) {
	return (
		<div
			className={`
				p-8
				rounded-[2.25rem]
				shadow-neumorphism-flat
				overflow-hidden
				${className && className}
			`}
		>
			{children}
		</div>
	)
}

export default Card