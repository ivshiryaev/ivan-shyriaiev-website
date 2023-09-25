import Section from '@/components/Section'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { aboutMe } from '@/constants'
import Noise from '@/components/Noise'

function AboutMe() {
	return (
		<Section>
			<Card className='
				h-[500px]
				relative
				bg-purple dark:bg-black
				flex flex-col gap-[36px]
				justify-center
				p-12
			'>
				<Noise className='opacity-20 dark:opacity-10'/>
				<h2 className='
					w-fit
					uppercase 
					text-[24px] sm:text-[36px] 
					leading-[24px] sm:leading-[36px]
					text-whiteText
					dark:text-transparent dark:bg-clip-text
					dark:bg-gradient-to-r from-purple to-cyan-500
				'>
					{'//About me'}
				</h2>
				<p className='
					text-[16px] sm:text-[20px] 
					leading-[16px] sm:leading-[20px]
				'>
					I am 23 years old.<br/>
					Programmer / designer / musician.<br/>
					Based in Poland, Gdańsk.
				</p>
				<div className='
					flex
					flex-col sm:flex-row
					gap-[16px] sm:gap-[36px]
				'>
					<a 
						className='w-full sm:w-fit' 
						href='/CV.pdf' 
						download
					>
						<Button className='w-full sm:w-fit text-whiteText'>Download CV</Button>
					</a>
					<Link 
						className='w-full sm:w-fit' 
						href='/CV.pdf' 
						target='_blank'
					>
						<Button className='w-full sm:w-fit'>Open CV</Button>
					</Link>
				</div>
			</Card>
		</Section>
	)
}

export default AboutMe