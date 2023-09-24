import Section from '@/components/Section'
import Card from '@/components/Card'
import Noise from '@/components/Noise'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
	const year : number = new Date().getFullYear()

	return (
		<Section>
			<Card className='
				relative
				flex flex-col gap-4
				justify-center items-center p-12
				bg-whiteText text-gray
				text-[14px]
			'>
				<Noise className='opacity-50'/>
				<div className='flex gap-1 text-[48px]'>
					<span>
						<AiOutlineGithub/>
					</span>
					<span>
						<AiFillLinkedin/>
					</span>
				</div>
				<div className='flex items-center justify-center flex-col gap-1'>
					<p>©{year}. Ivan Shyriaiev.</p>
					<p>All Rights Reserved</p>
				</div>
			</Card>
		</Section>
	)
}

export default Footer