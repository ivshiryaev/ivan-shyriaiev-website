"use client"

import ButtonAnimation from '@/components/animation/ButtonAnimation'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset',
	onClick?: () => void,
	className?: string,
	disabled?: boolean,
	children: React.ReactNode,
}

function Button({children, className, onClick, type, disabled} : ButtonProps) {
	return (
		<ButtonAnimation>
			<button
				type={type}
				onClick={onClick}
				className={`
					bg-transparent
					relative
					px-12 py-[36px]
					rounded-[48px]
					border border-2 border-whiteText
					flex justify-center items-center
					cursor-pointer
					transition-all
					overflow-hidden
					hover:text-darkBackground dark:hover:text-whiteText
					${className && className}
				`}
			>	
				{children}
			</button>
		</ButtonAnimation>
	)
}

export default Button