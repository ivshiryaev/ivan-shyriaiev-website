type Props = {
	className?: string,
	children: React.ReactNode,
}

function Card({children, className} : Props) {
	return (
		<div
			className={`
				w-full
				rounded-[48px]
				overflow-hidden
				${className && className}
			`}
		>
			{children}
		</div>
	)
}

export default Card