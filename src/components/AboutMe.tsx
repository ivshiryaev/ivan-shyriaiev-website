import Section from '@/components/Section'
import Card from '@/components/Card'
import Image from 'next/image'
import Button from '@/components/Button'

function AboutMe() {
	return (
		<Section heading='About me'>
			<Card 
				className='
					w-full !p-0
					flex flex-col
					justify-center items-center
					md:flex-row
				'
			>
				<div className='w-full md:w-3/5 h-full p-8 flex flex-col gap-4'>
					<p>I am 23 years old.<br/>
					Based in Gdańsk, Poland.<br/><br/>
					Interested in Programming, English Language and music.<br/>
					In my spare time i usually coding or doing gymnastics.</p>
					<div className='flex gap-4'>
						<Button>Download CV</Button>
						<Button>Open CV</Button>
					</div>
				</div>
				<div className='relative w-full md:w-2/5 h-[500px]'>
					<Image 
						className='pointer-events-none absolute w-full h-full object-cover'
						src='/images/me.jpg' 
						width={960}
						height={1280}
						alt='MyPhoto'
					/>
				</div>
			</Card>
		</Section>
	)
}

export default AboutMe