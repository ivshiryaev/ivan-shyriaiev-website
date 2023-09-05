import { plumpfullFont } from '@/app/fonts'

function Button({children, className, onClick, type}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`
				px-8 py-4
				rounded-[2.25rem]
				shadow-neumorphism-flat
				active:shadow-neumorphism-inset
				active:bg-concave
				hover:bg-convex
				${plumpfullFont.className}
				${className && className}
			`}
		>
			{children}
		</button>
	)
}

export default Button