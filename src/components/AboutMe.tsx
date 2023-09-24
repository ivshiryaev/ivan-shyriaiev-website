import Section from '@/components/Section'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { aboutMe } from '@/constants'
import React from 'react'
import Noise from '@/components/Noise'

function AboutMe() {
	return (
		<Section>
			<Card className='
				h-[500px]
				relative
				bg-purple
				flex flex-col gap-[36px]
				justify-center
				p-12
			'>
				<Noise className='opacity-20'/>
				<h2 className='text-[36px] uppercase leading-[36px]'>//About me</h2>
				<p className='text-[20px] leading-[20px]]'>I am 23 years old.<br/>
				Programmer / designer / musician.<br/>
				Based in Poland, Gdańsk.
				</p>
				<div className='flex gap-[2rem]'>
					<Button>Download CV</Button>
					<Button>Open CV</Button>
				</div>
			</Card>
		</Section>
	)
}

export default AboutMe