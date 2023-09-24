"use client"

import React from 'react'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset',
	onClick?: () => void,
	className?: string,
	disabled?: boolean,
	children: React.ReactNode,
}

function Button({children, className, onClick, type, disabled} : ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`
				px-12 py-[36px]
				rounded-[48px]
				outline outline-2 outline-whiteText
				flex justify-center items-center
				${className && className}
			`}
		>
			{children}
		</button>
	)
}

export default Button