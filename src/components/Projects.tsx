import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { plumpfullFont } from '@/app/fonts'
import Button from '@/components/Button'
import Image from 'next/image'
import { projects } from '@/constants'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Projects() {
	return (
		<Section 
			heading='My Projects' 
			className='!overflow-visible !gap-0 !p-0'
			type='h2'
		>
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
				{projects && projects.length > 0 && projects.map((project,index) => (
					<Card 
						key={index}
						className={`
							!p-0 h-min
							flex flex-col
							md:h-full
							md:flex-row md:justify-center md:items-center
						`}
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
								src={project.imageSrc || ''}
								fill
								alt={project.website || ''}
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
		            {project.description && project.description.split('\n').map((line, idx) => 
									(<React.Fragment key={idx}>{line}<br/></React.Fragment>)
								)}
							</p>
							<div className='w-full flex flex-wrap gap-3'>
								{project.buttons && project.buttons.map((button,index)=> (
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