import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import { AiOutlineGithub } from 'react-icons/ai'
import Noise from '@/components/Noise'
import DarkBackground from '@/components/DarkBackground'

interface Props{
	number: number,
	className: string,
	title: string,
	subtitle: string,
	website: string,
	githubLink: string,
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
			<Image
				className='
					hidden dark:block
					pointer-events-none
					absolute
					w-full h-full
					object-cover
					${className && className}
				'
				alt={title}
				src={`/images/card${number}.jpg`}
				fill
			/>
			<Noise className='opacity-50 dark:opacity-10'/>
			<Link 
				target='_blank'
				href={website}
				className='
					relative
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