import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { plumpfullFont } from '@/app/fonts'
import Button from '@/components/Button'
import Image from 'next/image'

interface MyButton {
	title : string,
	href : string,
}

interface Object {
	title: string,
	description: string,
	website: string,
	imageSrc: string,
	imageWidth: number,
	imageHeight: number,
	buttons: MyButton[],
}

const projects : Object[] = [
	{
		title: 'E-commerce store',
		description:`Implemented:

		- Stripe API
		- Shopping Cart
		- Netlify serverless functions
		- Contact form submissions

		Design made in Figma. Photos are compressed in Photoshop. Stripe Payments integrated with Netlify serverless functions.Because there is not much data about products (only 16 products) i decided to store all the data in single .json file instead of relying on database`,
		website: 'https://kupaz.pl',
		imageSrc: '/images/kupaz.jpg',
		imageWidth: 1334,
		imageHeight: 2000,
		buttons: [
			{
				title:'Website',
				href:'https://kupaz.pl',
			},
			{
				title:'Github',
				href:'https://github.com/ivshiryaev/kupaz',
			},
		],
	},
	{
		title: 'Landing page',
		description:`Landing page for body psychologist.

		Things i used:

		- Bootstrap
		- HTML
		- JS
		`,
		website: 'https://karinavlasenko.com',
		imageSrc: '/images/karinaVlasenko.jpg',
		imageWidth: 1179,
		imageHeight: 2074,
		buttons: [
			{
				title:'Website',
				href:'https://karinavlasenko.com',
			},
			{
				title:'Github',
				href:'https://github.com/ivshiryaev/Karina-Vlasenko---Website',
			},
		],
	}
]

function Projects() {
	return (
		<Section heading='My Projects' className='!overflow-visible !gap-0 !p-0'>
			<div 
				className='
					px-4 py-8 
					grid 
					grid-flow-col auto-cols-[97%] 
					gap-4
					self-start
					overflow-x-auto overscroll-x-contain overflow-y-hidden
					md:grid-flow-row
					md:gap-8
				'
			>
				{projects.map((project,index) => (
					<Card 
						key={index}
						className='
							!p-0 h-min
							flex flex-col
							md:h-full
							md:flex-row md:justify-center md:items-center
						'
					>
						<div 
							className='
								relative
								w-full h-[300px]
								md:w-2/5 md:h-full
								flex justify-center items-center
							'
						>
							<Image 
								className='pointer-events-none absolute w-full h-full object-cover'
								src={project.imageSrc}
								width={project.imageWidth}
								height={project.imageHeight}
								alt={project.website}
							/>
						</div>
						<div 
							className='
								p-6
								w-full h-full
								md:w-3/5
								flex flex-col gap-4 
								self-stretch
							'
						>
							<div className='flex flex-col'>
								<p className={`text-xl ${plumpfullFont.className}`}>{project.title}</p>
								<a target='_blank' href={project.website} className='hover:underline text-gray'>
									{project.website}
								</a>
							</div>
							<p>
								{project.description.split('\n').map((line, idx) => 
									(<React.Fragment key={idx}>{line}<br/></React.Fragment>)
								)}
							</p>
							<div className='w-full flex flex-wrap gap-3'>
								{project.buttons.map((button,index)=> (
									<a href={button.href} target='_blank' key={index}>
										<Button className='shrink-0'>{button.title}</Button>
									</a>
								))}
							</div>
						</div>
					</Card>
				))}
			</div>
		</Section>
	)
}

export default Projects