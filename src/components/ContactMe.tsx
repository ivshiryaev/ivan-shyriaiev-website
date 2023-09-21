"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import { FormValidation, FormSchema } from '@/lib/validations/FormValidation'
import { useForm as useFormspreeForm, handleSubmit as handleFormSpreeSubmit} from '@formspree/react'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Snackbar from '@mui/material/Snackbar';
import { MdDone } from 'react-icons/md'
import { BiLoaderAlt } from 'react-icons/bi'

import Tooltip from '@mui/material/Tooltip';
const formSpreeUrl = 'https://formspree.io/f/mqkvbyra'

function ContactMe() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [snackbarOpen, setSnackbarOpen] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormValidation>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		}
	});

	const processSubmit: SubmitHandler<FormValidation> = async (data) => {
		setIsSubmitting(true)

		const response = await fetch(formSpreeUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			reset()
			setSnackbarOpen(true)
		} else {
			alert('Oops, there is something wrong happened 🤷‍')
		}

		setIsSubmitting(false)
	}

	function handleCloseSnackbar(event: React.SyntheticEvent | Event, reason?: string){
		if (reason === 'clickaway') {
			return;
		}	

		setSnackbarOpen(false)
	}

	return (
		<>
			<Section heading='Contact me' type='h5'>
				<div className='flex flex-col md:flex-row gap-4 w-full'>
					<Card className='w-full'>
						<form 
							className='flex flex-col gap-4 text-dark'
							onSubmit={handleSubmit(processSubmit)}
						>
							<input 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								type="text"
								name="name"
								placeholder='Name...'
								{...register('name')}
							/>
							{errors?.name?.message && <p className='text-sm text-rose-500'>{errors.name?.message}</p>}
							<input 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								type="email"
								name="email"
								placeholder='Email...'
								{...register('email')}
							/>
							{errors?.email?.message && <p className='text-sm text-rose-500'>{errors.email?.message}</p>}
							<textarea 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								placeholder='Message...'
								name="message"
								rows={8}
								{...register('message')}
							/>
							{errors?.message?.message && <p className='text-sm text-rose-500'>{errors.message?.message}</p>}
							<div className='flex justify-center'>
								<Button className='disabled:opacity-50' type='submit' disabled={isSubmitting}>
									{isSubmitting ? (
										<span className='flex gap-2 justify-center items-center'>
											<span className='animate-spin'><BiLoaderAlt/></span>
											<span>Wait a sec...</span>
										</span>
									) : (
										<>
											Send
										</>
									)}
								</Button>
							</div>
						</form>
					</Card>
					<Card className='w-full h-min shadow-neumorphism-inset flex flex-col justify-center items-center gap-4 text-center'>
						<Link href='mailto:ivshiryaev1999@gmail.com'>ivshiryaev1999@gmail.com</Link>
						<div className='flex gap-4 text-4xl'>
						<Tooltip title='Github'>	
							<a 
								href='https://github.com/ivshiryaev' 
								className='cursor-pointer p-4 hover:bg-concave active:shadow-neumorphism-inset active:scale-[0.9] bg-convex rounded-full'
								target='_blank'
							>
									<BsGithub/>
							</a>
						</Tooltip>
						<Tooltip title='LinkedIn'>	
							<a 
								href='https://www.linkedin.com/in/theshirya/' 
								className='cursor-pointer p-4 hover:bg-concave active:shadow-neumorphism-inset active:scale-[0.9] bg-convex rounded-full'
								target='_blank'
							>
								<BsLinkedin/>
							</a>
						</Tooltip>
						</div>
					</Card>
				</div>
			</Section>
			<Snackbar 
				open={snackbarOpen} 
				autoHideDuration={6000} 
				onClose={handleCloseSnackbar}
				anchorOrigin={{
					horizontal: 'center',
					vertical:'bottom',
				}}
			>
				<div className='flex gap-2 justify-center items-center px-4 py-2 rounded-md shadow-md bg-green-500 text-darkTextPrimary'>
					<Image
						priority
						className='rounded-md'
						width={100}
						height={100}
						alt='Success image'
						src='https://i.gifer.com/4BJW.gif'
					/>
					<span>Got your message, i will reply soon 😀</span>
				</div>
			</Snackbar>
		</>
	)
}

export default ContactMe