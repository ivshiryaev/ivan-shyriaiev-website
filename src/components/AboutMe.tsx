import Section from '@/components/Section'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { aboutMe } from '@/constants'
import React from 'react'

function AboutMe() {
	return (
		<Section heading='About me' type='h3'>
			<Card 
				className='
					w-full !p-0
					flex flex-col
					justify-center items-center
					md:flex-row
				'
			>
				<div className='order-last md:order-first w-full md:w-3/5 h-full p-8 flex flex-col gap-4'>
		            {aboutMe && aboutMe.split('\n').map((line, idx) => 
						(<React.Fragment key={idx}>{line}<br/></React.Fragment>)
					)}
					<div className='text-[12px] flex flex-col opacity-50'>
						<Link href='https://github.com/ivshiryaev/cockroach-simulator/'>cockroach simulator</Link>
						<Link href='https://github.com/ivshiryaev/simple-3d-game-bouncing-ball/'>3d bounce game</Link>
					</div>
					<div className='flex gap-4 flex-wrap'>
						<a href="/CV.pdf" download>
							<Button>Download CV</Button>
						</a>
						<a href="/CV.pdf" target='_blank'>
							<Button>Open CV</Button>
						</a>
					</div>
				</div>
				<div className='order-first md:order-last relative w-full md:w-2/5 h-[300px] md:h-[500px]'>
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