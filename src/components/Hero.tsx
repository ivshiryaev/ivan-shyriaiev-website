import Image from 'next/image'
import Section from './Section'
import Card from './Card'
import ScrollSvg from '@/components/svg/ScrollSvg/ScrollSvg'
import Noise from '@/components/Noise'

function Hero() {
	return (
		<Section className='min-h-screen flex flex-col'>
			<Card className='
				relative
				grow
				bg-yellow
				flex flex-col 
				justify-center items-center
				gap-12
			'>
				{/*Absolute Background Content*/}
				<div className='
					p-12
					absolute
					w-full h-full
					flex flex-col
					justify-between items-center
				'>
					{/*Top row*/}
					<div className='
						w-full h-full
						flex justify-between
						items-start
					'>
						<div className='
							relative
							w-[120px] h-[120px]
						'>
							<Image
								className='object-fit'
								src='/svg/LeftTop.svg'
								alt='Backend'
								fill
							/>
						</div>
						<div className='
							relative
							w-[120px] h-[120px]
						'>
							<Image
								className='object-fit'
								src='/svg/RightTop.svg'
								alt='UI'
								fill
							/>
						</div>
					</div>
					{/*Bottom row*/}
					<div className='
						w-full h-full
						flex justify-between 
						items-end
					'>
						<div className='
							relative
							w-[120px] h-[120px]
						'>
							<Image
								className='object-fit'
								src='/svg/LeftBottom.svg'
								alt='FrontEnd'
								fill
							/>
						</div>
						<div>
							<ScrollSvg/>
						</div>
					</div>
				</div>
				<Noise className='opacity-50'/>
				{/*Designer Developer*/}
				<div className='
					bottom-16
					absolute
					w-[400px]
					flex flex-col gap-1
				'>
					<div className='
						overflow-visible
						relative rotate-1
						flex justify-start
					'>
						<span className='
							z-10
							uppercase
							leading-[40px]
							text-[40px]
							stroke-white-2px
							text-yellow
						'>
							Designer
						</span>
						<span className='
							z-0
							blur-sm
							uppercase
							absolute
							bg-clip-text
							text-transparent
							bg-gradient-to-r
							from-pink-500 to-violet-500
							leading-[40px]
							text-[40px]
						'>
							Designer
						</span>
					</div>
					<div className='
						overflow-visible
						relative -rotate-1
						flex justify-end
					'>
						<span className='
							z-10
							uppercase
							leading-[40px]
							text-[40px]
							stroke-white-2px
							text-yellow
						'>
							Developer
						</span>
						<span className='
							z-0
							blur-sm
							uppercase
							absolute
							bg-clip-text
							text-transparent
							bg-gradient-to-r
							from-pink-500 to-violet-500
							leading-[40px]
							text-[40px]
						'>
							Developer
						</span>
					</div>
				</div>

				{/*RELATIVE Main text*/}
				<div className='
					relative 
					flex flex-col 
					justify-center items-center 
				'>
					<span className='
						uppercase
						text-transparent
						text-[80px]
						leading-[80px]
						stroke-white-3px
					'>
						Ivan Shyriaiev
					</span>
					<h1 className='
						uppercase
						text-yellow
						text-shadow-4px
						text-[80px]
						leading-[80px]
						relative
						stroke-black
					'>
						Ivan Shyriaiev
					</h1>
					<span className='
						uppercase
						text-transparent
						text-[80px]
						leading-[80px]
						stroke-white-3px
					'>
						Ivan Shyriaiev
					</span>			
				</div>
			</Card>
		</Section>
	)
}

export default Hero