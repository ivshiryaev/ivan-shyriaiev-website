import Card from '@/components/Card'
import { AiOutlineGithub } from 'react-icons/ai'

function ProjectCard() {
	return (
		<Card className='
			relative
			h-[300px] bg-green
			flex flex-col gap-1
			justify-center items-center
		'>
			<div className='absolute top-8 left-8'>
				..001
			</div>
			<div className='absolute bottom-8 right-8'>
				<span className='text-[48px]'><AiOutlineGithub /></span>
			</div>
			<p className='text-[30px]'>Threads app</p>
			<p>Description</p>
		</Card>
	)
}

export default ProjectCard