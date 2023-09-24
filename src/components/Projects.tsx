import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import Image from 'next/image'
import { projects } from '@/constants'

function Projects() {
	return (
		<Section className='flex gap-[16px]'>
			{projects && projects.map(project => (
				<ProjectCard
				/>
			))}
		</Section>
	)
}

export default Projects