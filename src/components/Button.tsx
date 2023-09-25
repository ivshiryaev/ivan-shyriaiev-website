"use client"

import Noise from '@/components/Noise'

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
				z-0
				button-hover
				relative
				px-12 py-[36px]
				flex justify-center items-center
				cursor-pointer
				rounded-[48px]
				outline outline-2 outline-whiteText
				transition-all
				overflow-hidden
				hover:text-darkText
				${className && className}
			`}
		>	
			<Noise className='opacity-20'/>
			<span className='z-10'>
				{children}
			</span>
		</button>
	)
}

export default Button