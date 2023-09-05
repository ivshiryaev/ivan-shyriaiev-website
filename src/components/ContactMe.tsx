import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import Tooltip from '@mui/material/Tooltip';

function ContactMe() {
	return (
		<Section heading='Contact me'>
			<div className='flex md:flex-row gap-4 w-full'>
				<Card className='w-full'>
					<form 
						className='flex flex-col gap-4 text-dark'
						action=""
					>
						<input 
							className='
								bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
							' 
							type="text"
							placeholder='Name...'
							name='fname'
						/>
						<input 
							className='
								bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
							' 
							type="text"
							placeholder='Email...'
							name='email'
						/>
						<textarea 
							className='
								bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
							' 
							type="text"
							placeholder='Text...'
							name='text'
							rows='8'
						/>
						<div className='flex justify-center'>
							<Button className='w-min'>Send</Button>
						</div>
					</form>
				</Card>
				<Card className='w-full h-min shadow-neumorphism-inset flex flex-col justify-center items-center gap-4 text-center'>
					<p>ivshiryaev1999@gmail.com</p>
					<div className='flex gap-4 text-4xl'>
					<Tooltip title='Github'>	
						<span className='cursor-pointer p-4 hover:bg-concave active:shadow-neumorphism-inset active:scale-[0.9] bg-convex rounded-full'>
								<BsGithub/>
						</span>
					</Tooltip>
					<Tooltip title='LinkedIn'>	
						<span className='cursor-pointer p-4 hover:bg-concave active:shadow-neumorphism-inset active:scale-[0.9] bg-convex rounded-full'>
							<BsLinkedin/>
						</span>
					</Tooltip>
					</div>
				</Card>
			</div>
		</Section>
	)
}

export default ContactMe