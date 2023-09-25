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
				gap-4 lg:gap-12
			'>
				{/*Absolute Background Content*/}
				<div className='
					p-6 lg:p-12
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
							w-[90px] h-[90px]
							lg:w-[120px] lg:h-[120px]
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
							w-[90px] h-[90px]
							lg:w-[120px] lg:h-[120px]
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
						flex 
						justify-center sm:justify-between 
						items-end
					'>
						<div className='
							hidden sm:block
							relative
							w-[90px] h-[90px]
							lg:w-[120px] lg:h-[120px]
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

				<Noise className='opacity-75'/>

				{/*RELATIVE Main text*/}
				<div className='
					flex flex-col 
					justify-center items-center 
				'>
					{/*Small text*/}
					<div className='
						flex flex-col gap-1 
						justify-center items-center
						sm:hidden
					'>
						<p className='uppercase text-[100px] stroke-black-3px text-transparent'>Ivan</p>
						<p className='uppercase text-[42px] stroke-black-2px text-transparent'>Shyriaiev</p>
					</div>
					{/*Large*/}
					<div className='
						flex flex-col 
						justify-center items-center
					'>
						<span className='
							hidden sm:block
							uppercase
							text-transparent
							text-[50px] lg:text-[80px]
							leading-[50px] lg:leading-[80px]
							stroke-white-2px
						'>
							Ivan Shyriaiev
						</span>
						<h1 className='
							hidden sm:block
							uppercase
							text-yellow
							text-shadow-4px
							text-[50px] lg:text-[80px]
							leading-[50px] lg:leading-[80px]
							relative
							stroke-black-2px
						'>
							Ivan Shyriaiev
						</h1>
						<span className='
							hidden sm:block
							uppercase
							text-transparent
							text-[50px] lg:text-[80px]
							leading-[50px] lg:leading-[80px]
							stroke-white-2px
						'>
							Ivan Shyriaiev
						</span>
					</div>	
				</div>

				{/*Designer Developer*/}
				<div className='
					sm:absolute sm:bottom-16
					w-[280px] lg:w-[400px]
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
							text-[24px] leading-[24px]
							lg:leading-[36px] lg:text-[36px]
							stroke-black-1px
							text-yellow
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
							text-[24px] leading-[24px]
							lg:leading-[36px] lg:text-[36px]
							stroke-black-1px
							text-yellow
						'>
							Developer
						</span>
					</div>
				</div>
			</Card>
		</Section>
	)
}

export default Hero