import Link from 'next/link'
import Card from '@/components/Card'
import { AiOutlineGithub } from 'react-icons/ai'
import Noise from '@/components/Noise'

interface Props{
	number?: number,
	className?: string,
	title?: string,
	subtitle?: string,
	website?: string,
	githubLink?: string,
}

function ProjectCard({
	number,
	className,
	title,
	subtitle,
	website,
	githubLink,
} : Props) {
	return (
		<Card className={`
			relative
			h-[300px]
			transition
			hover:drop-shadow-[0px_0px_4px_rgba(255,255,255,1)]
			${className && className}
		`}>
			<Noise className='opacity-50'/>
			<Link 
				target='_blank'
				href={website}
				className='
					w-full h-full
					flex flex-col gap-1
					justify-center items-center
				'
			>
				<div className='absolute top-8 left-8'>
					..0{number}
				</div>
				<p className='text-[30px]'>{title}</p>
				<p>{subtitle}</p>
			</Link>
			<Link 
				className='cursor-pointer absolute bottom-8 right-8 hover:scale-105'
				href={githubLink}
				target='_blank'
			>
				<span className='text-[48px]'><AiOutlineGithub /></span>
			</Link>
		</Card>
	)
}

export default ProjectCard