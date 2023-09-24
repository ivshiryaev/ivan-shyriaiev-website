import React from 'react'

interface SectionProps {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p',
	heading?: string,
	className?: string,
	children?: React.ReactNode,
}

const headingTags: Record<string, string> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	p: 'p',
};

function Section({
	type, 
	children, 
	className, 
	heading,
} : SectionProps) {

	const Tag:any = headingTags[type] || 'p'

	return (
		<section 
			className={`
				lg:px-4 lg:py-2
				justify-center items-center
				${className && className}
			`}
		>
			{heading && 
				<Tag className={`text-3xl`}>{heading}</Tag>
			}
			{children}
		</section>
	)
}

export default Section