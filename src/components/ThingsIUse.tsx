import Section from '@/components/Section'
import Card from '@/components/Card'

import Tooltip from '@mui/material/Tooltip';

import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoTypescript, BiLogoBootstrap, BiLogoNodejs, BiLogoGithub, BiLogoMongodb } from 'react-icons/bi'
import { SiExpress, SiFigma, SiAdobephotoshop, SiNextdotjs } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import { SiJira } from 'react-icons/si'

interface Skill {
	title: string,
	icon: JSX.Element,
}

interface Object {
	title: string,
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
			},
			{
				title:'MongoDB',
				icon:<BiLogoMongodb/>,
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
			{
				title:'Jira',
				icon:<SiJira/>,
			},
		],
	},
]

function ThingsIUse() {
	return (
		<Section heading='Tech stack' type='h4'>
			<div 
				className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'
			>
				{ data.map((item, index) => (
					<div key={index}>
						<Card
							className='
								w-full flex flex-col gap-2
							' 
						>
							<p className={`text-xl`}>
								{item.title}
							</p>
							<ul 
								className='flex gap-2 flex-wrap'
							>
								{item.skills.map((skill,index) => (
									<li 
										key={index}
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
											<span>{skill.icon}</span>
										</Tooltip>
									</li>
								))}
							</ul>
						</Card>
					</div>
				))}
			</div>
		</Section>
	)
}

export default ThingsIUse