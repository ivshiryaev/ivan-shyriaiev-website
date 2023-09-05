"use client"
import { motion } from 'framer-motion'

import Section from '@/components/Section'
import Card from '@/components/Card'
import { plumpfullFont } from '@/app/fonts'

import Tooltip from '@mui/material/Tooltip';

import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoBootstrap, BiLogoNodejs, BiLogoGithub } from 'react-icons/bi'
import { SiExpress, SiFigma, SiAdobephotoshop, SiNextdotjs } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'

const cardWrapperVariants = {
	visible: { 
		opacity: 1,
		transition: {
			when:'beforeChildren',
			staggerChildren: 0.1,
		},
	},
	hidden: { 
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
}

const cardVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
}

const listVariants = {
	visible: { 
		opacity: 1,
		transition: {
			when:'beforeChildren',
			staggerChildren: 0.1,
		},
	},
	hidden: { 
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
}

const listItemVariants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
}

interface Skill {
	title: string,
	icon: JSX.element,
}

interface Object {
	title: string,
	description: string,
	skills: Skill[],
}

const data : Object[] = [
	{
		title:'Front-end',
		skills:[
			{
				title:'Next.js',
				icon:<SiNextdotjs/>,
			},
			{
				title:'React',
				icon:<FaReact/>,
			},
			{
				title:'Tailwind',
				icon:<BiLogoTailwindCss/>,
			},
			{
				title:'Typescript',
				icon:<BiLogoTypescript/>,
			},
			{
				title:'Bootstrap',
				icon:<BiLogoBootstrap/>,
			},
		],
	},
	{
		title: 'Back-end',
		skills:[
			{
				title:'Node.js',
				icon:<BiLogoNodejs/>,
			},
			{
				title:'Express',
				icon:<SiExpress/>,
			}
		]
	},
	{
		title:'Design',
		skills:[
			{
				title:'Figma',
				icon:<SiFigma/>,
			},
			{
				title:'Photoshop',
				icon:<SiAdobephotoshop/>,
			},
		],
	},
	{
		title:'DevOps',
		skills:[
			{
				title:'Git',
				icon:<BsGit/>,
			},
			{
				title:'GitHub',
				icon:<BiLogoGithub/>,
			},
		],
	},
]

function ThingsIUse() {
	return (
		<Section heading='Tech stack'>
			<motion.div 
				className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'
				variants={cardWrapperVariants}
				initial='hidden'
				whileInView='visible'
				exit='hidden'
			>
				{ data.map((item, index) => (
					<motion.div variants={cardVariants}>
						<Card
							key={index}
							className='
								w-full flex flex-col gap-2
							' 
						>
							<p className={`text-xl`}>
								{item.title}
							</p>
							<motion.ul 
								className='flex gap-2 flex-wrap'
								variants={listVariants}
								initial='hidden'
								whileInView='visible'
								exit='hidden'
							>
								{item.skills.map((skill,index) => (
									<motion.li 
										key={index}
										variants={listItemVariants}
										className='
											p-2
											text-5xl 
											rounded-full
											cursor-pointer
											bg-convex
											hover:bg-concave
											active:shadow-neumorphism-inset
											active:scale-[0.9]
										'
									>
										<Tooltip title={skill.title}>
											{skill.icon}
										</Tooltip>
									</motion.li>
								))}
							</motion.ul>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</Section>
	)
}

export default ThingsIUse