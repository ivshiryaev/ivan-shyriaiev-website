import Image from 'next/image'

function DarkBackground({className} : {className?: string}) {
	return (
		<Image
			className={`
				hidden dark:block
				pointer-events-none
				absolute
				w-full h-full
				object-cover
				${className && className}
			`}
			src='/textures/DarkBackground.jpg'
			alt='noise texture'
			fill
			priority
		/>
	)
}

export default DarkBackground