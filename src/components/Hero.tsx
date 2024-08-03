import Image from 'next/image'
import Section from './Section'
import Card from './Card'
import ScrollSvg from '@/components/svg/ScrollSvg/ScrollSvg'
import Noise from '@/components/Noise'
import DarkBackground from '@/components/DarkBackground'

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
				dark:bg-transparent
			'>
				<DarkBackground />

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

				<Noise className='dark:opacity-10 opacity-75'/>

				{/*RELATIVE Main text*/}
				<div className='
					flex flex-col 
					justify-center items-center 
				'>
					{/*DARK Small text*/}
					<div className='
						relative
						hidden dark:block dark:sm:hidden
						flex flex-col gap-1 
						justify-center items-center
						sm:hidden
					'>
						<p className='uppercase text-[100px] stroke-white-3px text-transparent'>Ivan</p>
						<p className='uppercase text-[42px] stroke-white-2px text-transparent'>Shyriaiev</p>
					</div>
					{/*DARK - Large*/}
					<div className='
						hidden dark:block
						flex flex-col 
						justify-center items-center
					'>
						<span className='
							relative
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
							text-transparent
							text-[50px] lg:text-[80px]
							leading-[50px] lg:leading-[80px]
							relative
							stroke-white-2px
						'>
							Ivan Shyriaiev
						</h1>
						<span className='
							relative
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
			</Card>
		</Section>
	)
}

export default Hero