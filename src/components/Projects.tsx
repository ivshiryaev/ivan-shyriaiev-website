import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Image from 'next/image'
import { projects } from '@/constants'

const cardClassNames=[
	'bg-green text-whiteText dark:bg-transparent',
	'bg-whiteText text-darkText dark:bg-transparent dark:text-whiteText',
	'bg-blue text-whiteText dark:bg-transparent',
	'bg-purple text-whiteText dark:bg-transparent',
]


function Projects() {
	return (
		<Section className='
			grid 
			grid-cols-1
			sm:grid-cols-2
			md:grid-cols-3
			gap-[0.5rem] sm:gap-[1rem]
		'>
			{projects && projects.map((project,index) => (
				<ProjectCard
					key={index}
					className={cardClassNames[index]}
					number={project.number}
					title={project.title}
					subtitle={project.subtitle}
					website={project.website}
					githubLink={project.githubLink}
				/>
			))}
		</Section>
	)
}

export default Projects

// flex gap-[8px] sm:gap-[16px]
// flex-col sm:flex-row
// text-center