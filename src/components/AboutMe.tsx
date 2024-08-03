import Section from '@/components/Section'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { aboutMe } from '@/constants'
import Noise from '@/components/Noise'

function AboutMe() {
	return (
		<Section>
			<Card className='
				lg:h-auto
				relative
				bg-purple dark:bg-black
				flex flex-col gap-[36px]
				justify-center
				p-12 lg:p-32
			'>
				<Noise className='opacity-20 dark:opacity-10'/>
				<h2 className='
					w-fit
					uppercase 
					text-[24px] sm:text-[36px] 
					leading-[24px] sm:leading-[36px]
					text-whiteText
					dark:text-transparent dark:bg-clip-text
					dark:bg-gradient-to-r from-purple to-cyan-500
				'>
					{'//Who am I?'}
				</h2>
				<p className='
					text-[16px] sm:text-[20px]
					leading-[24px] sm:leading-[24px]
				'>
					Detail-oriented full stack dev. Highly adept at both independent and collaborative projects, with an emphasis on design and website development.
				</p>
			</Card>
		</Section>
	)
}

export default AboutMe