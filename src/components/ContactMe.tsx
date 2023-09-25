"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import { FormValidation, FormSchema } from '@/lib/validations/FormValidation'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import { BiLoaderAlt } from 'react-icons/bi'

import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';

import { formSpreeUrl } from '@/constants'
import Noise from '@/components/Noise'
import DarkBackground from '@/components/DarkBackground'

function ContactMe() {
	const [isHidden, setIsHidden] = useState(true)
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

		// TESTING

		// const promise = new Promise((resolve) => {
		// 	setTimeout(()=>{
		// 		resolve()
		// 	},2000)
		// })

		// await promise

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

		setSnackbarOpen(true)
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
			<Section>
				<Card className='
					relative
					flex justify-center items-center
				'>
					<div 
						className={`
							z-10
							absolute
							w-full h-[140%]
							flex flex-col gap-1 
							justify-center items-center
							bg-yellow dark:bg-transparent
							hover:opacity-75
							cursor-pointer
							transition-all
							duration-500
							ease-[cubic-bezier(.39,-0.44,.51,1.22)]
							${isHidden ? `
								translate-x-0
							` : `
								translate-y-[140%]
								opacity-0
							`}
						`}
						onClick={()=>setIsHidden(false)}
					>
						<DarkBackground/>
						<p className='
							relative 
							text-[36px]
							text-darkText dark:text-whiteText
							uppercase 
						'>
							{'//Contact Me'}
						</p>
						<span className='relative text-darkText dark:text-whiteText'>*Click</span>
						<Noise className='opacity-100 dark:opacity-10'/>
					</div>
					<form 
						className='
							w-full
							flex
							flex-col sm:flex-row
							justify-between 
							gap-2 lg:gap-4
						'
						onSubmit={handleSubmit(  processSubmit)}
					>
						<div className='flex grow flex-col gap-2 lg:gap-4'>
							<div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
								<div className='relative w-full flex flex-col gap-1'>
									<div className='
										relative rounded-[48px] overflow-hidden
										flex flex-col justify-center items-center
									'>
										<input 
											className='
												focus:bg-grayDark
												dark:focus:bg-gray
												dark:bg-darkText
												outline-none
												bg-gray w-full rounded-[48px] p-12
											' 
											type="text"
											placeholder='Name...'
											{...register('name')}
										/>
										<Noise className='absolute opacity-20 dark:opacity-10'/>
									</div>
									{errors?.name?.message && <p className='text-sm text-rose-500'>{errors.name?.message}</p>}
								</div>
								<div className='w-full flex flex-col gap-1'>
									<div className='
										relative rounded-[48px] overflow-hidden
										flex flex-col justify-center items-center
									'>
										<input 
											className='
												focus:bg-grayDark
												dark:focus:bg-gray
												dark:bg-darkText
												outline-none
												bg-gray w-full rounded-[48px] p-12
											' 
											type="email"
											placeholder='Email...'
											{...register('email')}
										/>
										<Noise className='absolute opacity-20 dark:opacity-10'/>
									</div>
									{errors?.email?.message && <p className='text-sm text-rose-500'>{errors.email?.message}</p>}
								</div>
							</div>
							<div className='flex flex-col gap-1 justify-center items-center'>
								<div className='
									w-full
									relative rounded-[48px] overflow-hidden
									flex flex-col justify-center items-center
								'>
									<textarea 
										className='
											focus:bg-grayDark
											dark:focus:bg-gray
											dark:bg-darkText
											outline-none
											bg-gray w-full rounded-[48px] p-12
										' 
										placeholder='Message...'
										rows={8}
										{...register('message')}
									/>
									<Noise className='absolute opacity-20 dark:opacity-10'/>
								</div>
								{errors?.message?.message && <p className='text-sm text-rose-500'>{errors.message?.message}</p>}
							</div>
						</div>
						<Button className='flex-auto !outline-none !py-[48px] bg-green dark:bg-darkText disabled:opacity-50' type='submit' disabled={isSubmitting}>
							{isSubmitting ? (
								<span className='flex gap-2 justify-center items-center'>
									<span className='animate-spin'><BiLoaderAlt/></span>
									<span>Wait a sec...</span>
								</span>
							) : (
								<span className='text-[24px] uppercase'>
									Send
								</span>
							)}
						</Button>
					</form>
				</Card>
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
				<div className='
					overflow-hidden
					relative 
					flex gap-4 justify-center items-center 
					px-[36px] py-[36px] 
					rounded-[48px] 
					shadow-md 
					bg-green text-darkTextPrimary
					dark:bg-purple
				'>
					<Noise className='opacity-20 dark:opacity-10'/>
					<Image
						priority
						className='z-10 rounded-md'
						width={100}
						height={100}
						alt='Success image'
						src='https://i.gifer.com/4BJW.gif'
					/>
					<span>
						Received your message 👌<br/>
						i&apos;ll reply as soon as possible🙃
					</span>
				</div>
			</Snackbar>
		</>
	)
}

export default ContactMe