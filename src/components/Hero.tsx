import Image from 'next/image'
import { plumpfullFont } from '@/app/fonts'

function Hero() {
	return (
		<section 
			className='
				flex justify-center items-center
				min-h-screen
			'
		>
			<div className='flex flex-col justify-center items-center gap-4'>
				<div className='w-[300px] h-[300px] rounded-full overflow-hidden shadow-neumorphism-flat'>
					<Image 
						className='pointer-events-none w-full h-full object-cover'
						src='/images/myFace.jpg' 
						width={300}
						height={300}
						alt='Kupaz E-commerce store'
					/>
				</div>
				<h1 className={`text-5xl drop-shadow-2xl ${plumpfullFont.className}`}>
					Hi, i&apos;m Ivan
				</h1>
				<div className='w-[240px] grid'>
					<p className='text-3xl'>Full stack</p>
					<p className='text-3xl justify-self-end'>Developer</p>
				</div>
			</div>
		</section>
	)
}

export default Hero