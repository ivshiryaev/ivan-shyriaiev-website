import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Image from 'next/image'
import { projects } from '@/constants'

const cardClassNames=[
	'bg-green text-whiteText',
	'bg-yellow text-darkText',
	'bg-blue text-whiteText',
]


function Projects() {
	return (
		<Section className='
			flex gap-[8px] sm:gap-[16px]
			flex-col sm:flex-row
		'>
			{projects && projects.map((project,index) => (
				<ProjectCard
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