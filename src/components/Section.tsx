import React from 'react'

interface Props {
	className?: string,
	children?: React.ReactNode,
}

function Section({
	children, 
	className, 
} : Props) {

	return (
		<section 
			className={`
				px-2 py-1
				lg:px-4 lg:py-2
				justify-center items-center
				${className && className}
			`}
		>
			{children}
		</section>
	)
}

export default Section