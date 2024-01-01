'use client'

import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/Card'
import { AiOutlineGithub } from 'react-icons/ai'
import Noise from '@/components/Noise'
import DarkBackground from '@/components/DarkBackground'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props{
	number: number,
	className: string,
	title: string,
	subtitle: string,
	website: string,
	githubLink?: string | undefined,
}

function ProjectCard({
	number,
	className,
	title,
	subtitle,
	website,
	githubLink,
} : Props) {
	const [isHover, setIsHover] = useState(false)

	return (
		<Card 
			className={`
				grow
				relative
				h-[300px]
				transition
				text-center
				hover:saturate-150
				${className && className}
			`}
		>
			<Image
				className={`
					hidden dark:block
					pointer-events-none
					absolute
					w-full h-full
					object-cover
					transition
					${className && className}
					${isHover ? 'scale-105 rotate-1' : ''}
				`}
				alt={title}
				src={`/images/card${number + 1}.jpg`}
				fill
			/>
			<Noise className='opacity-50 dark:opacity-10'/>
			<Link
				onMouseEnter={()=> setIsHover(true)}
				onMouseLeave={()=>setIsHover(false)}
				href={`/Project/${number}`}
				className='
					relative
					w-full h-full
					flex flex-col gap-1
					justify-center items-center
				'
			>
				<div className='absolute top-8 left-8'>
					..0{number + 1}
				</div>
				<p className='text-[30px]'>{title}</p>
				<p>{subtitle}</p>
			</Link>
			{githubLink &&
				<Link 
					className='cursor-pointer absolute bottom-8 right-8 hover:scale-105'
					href={githubLink}
					target='_blank'
				>
					<span className='text-[48px]'><AiOutlineGithub /></span>
				</Link>
			}
		</Card>
	)
}

export default ProjectCard