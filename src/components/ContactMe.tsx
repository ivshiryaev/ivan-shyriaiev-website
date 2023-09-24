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
import Snackbar from '@mui/material/Snackbar';
import { MdDone } from 'react-icons/md'
import { BiLoaderAlt } from 'react-icons/bi'

import Tooltip from '@mui/material/Tooltip';
import { formSpreeUrl } from '@/constants'

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

		// const response = await fetch(formSpreeUrl, {
		// 	method: 'POST',
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		'Accept': 'application/json',
		// 	},
		// })

		// if(response.ok){
		// 	reset()
		// 	setSnackbarOpen(true)
		// } else {
		// 	alert('Oops, there is something wrong happened 🤷‍')
		// }

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
				<form 
					className='flex justify-between items-between gap-4 text-dark'
					onSubmit={handleSubmit(  processSubmit)}
				>
					<div className='flex grow flex-col gap-4'>
						<div className='flex gap-4'>
							<div className='w-full flex flex-col gap-1'>
								<input 
									className='
										bg-gray w-full rounded-[48px] p-12
									' 
									type="text"
									placeholder='Name...'
									{...register('name')}
								/>
								{errors?.name?.message && <p className='text-sm text-rose-500'>{errors.name?.message}</p>}
							</div>
							<div className='w-full flex flex-col gap-1'>
								<input 
									className='
										bg-gray w-full rounded-[48px] p-12
									' 
									type="email"
									placeholder='Email...'
									{...register('email')}
								/>
								{errors?.email?.message && <p className='text-sm text-rose-500'>{errors.email?.message}</p>}
							</div>
						</div>
						<textarea 
							className='
								bg-gray w-full rounded-[48px] p-12
							' 
							placeholder='Message...'
							rows={8}
							{...register('message')}
						/>
						{errors?.message?.message && <p className='text-sm text-rose-500'>{errors.message?.message}</p>}
					</div>
					<Button className='flex-auto !outline-none bg-yellow disabled:opacity-50' type='submit' disabled={isSubmitting}>
						{isSubmitting ? (
							<span className='flex gap-2 justify-center items-center'>
								<span className='animate-spin'><BiLoaderAlt/></span>
								<span>Wait a sec...</span>
							</span>
						) : (
							<span className='text-darkText text-[24px] uppercase'>
								Send
							</span>
						)}
					</Button>
				</form>
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