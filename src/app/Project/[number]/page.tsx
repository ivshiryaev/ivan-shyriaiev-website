import Section from '@/components/Section'
import Card from '@/components/Card'
import Noise from '@/components/Noise'
import Button from '@/components/Button'
import Link from 'next/link'

import projects from '@/data/projects.json'

function Project({params} : {params: {number: number}}) {
	const data = projects.find(project => project.number == params.number)
	if(!data) return null

	return (
		<Section className='!items-start flex flex-col gap-[1rem]'>
			<Link href='/'>
				<Card className='w-fit bg-green dark:bg-black px-12 py-4'>
					🏠
				</Card>
			</Link>
			<Card className='
				relative
				flex flex-col gap-[2rem]
				justify-center
				p-12
				bg-purple dark:bg-black
			'>
				<Noise className='opacity-20 dark:opacity-10'/>
				<div className='flex flex-col'>
					<h1 className='
						w-fit
						uppercase 
						text-[24px] sm:text-[36px] 
						leading-[24px] sm:leading-[36px]
						text-whiteText
						dark:text-transparent dark:bg-clip-text
						dark:bg-gradient-to-r from-purple to-cyan-500
					'>
						{data.title}
					</h1>
					<h2 className='
						sm:text-[1.5rem]
						leading-[24px] sm:leading-[36px]
						text-whiteText
						dark:text-transparent dark:bg-clip-text
						dark:bg-gradient-to-r from-purple to-cyan-500
					'>
						{data.subtitle}
					</h2>
				</div>
				<p className='whitespace-pre-wrap font-sans'>
					{data.description}
				</p>
				<div className='
					flex
					flex-col sm:flex-row
					gap-[16px]
				'>
					<Link 
						className='w-full sm:w-fit' 
						href={data.website} 
						target='_blank'
					>
						<Button className='w-full sm:w-fit'>Website</Button>
					</Link>
					{ data.githubLink &&
						<Link 
							className='w-full sm:w-fit' 
							href={data.githubLink} 
							target='_blank'
						>
							<Button className='w-full sm:w-fit'>Github</Button>
						</Link>
					}
				</div>
			</Card>
		</Section>
	)
}

export default Project