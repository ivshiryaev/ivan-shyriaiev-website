import Image from 'next/image'

function Noise({className} : {className?: string}) {
	return (
		<Image
			className={`
				pointer-events-none
				absolute
				w-full h-full
				object-cover
				${className && className}
			`}
			src='/textures/noise.png'
			alt='noise texture'
			fill
			priority
		/>
	)
}

export default Noise