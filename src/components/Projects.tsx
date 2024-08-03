import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Image from 'next/image'

import projects from '@/data/projects.json'

export default function Projects() {
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
					className='bg-transparent text-whiteText'
					number={index}
					title={project.title}
					subtitle={project.subtitle}
					website={project.website}
					githubLink={project.githubLink}
					imageSrc={project.imageSrc}
					isOld={project.isOld}
					slug={project.slug}
				/>
			))}
		</Section>
	)
}