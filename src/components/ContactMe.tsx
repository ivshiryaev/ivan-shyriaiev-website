"use client"

import React, { useState, useEffect } from 'react'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useForm, ValidationError } from "@formspree/react";
import Snackbar from '@mui/material/Snackbar';
import { MdDone } from 'react-icons/md'
import { BiLoaderAlt } from 'react-icons/bi'

import Tooltip from '@mui/material/Tooltip';

function ContactMe() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [snackbarOpen, setSnackbarOpen] = useState(false)
	const [state, handleSubmit] = useForm("mqkvbyra");
	const [formData, setFormData] = useState({
		fname:'',
		email:'',
		message:'',
	})

	function handleClick(){
		setIsSubmitting(true)
	}

	useEffect(()=>{
		if(state.succeeded){
			setSnackbarOpen(true)

			setFormData({
				fname:'',
				email:'',
				message:'',
			})

			setIsSubmitting(false)
		}
	},[state.succeeded])

	useEffect(() => {
	  if (state.errors) {
	    console.error("Form submission error:", state.errors);
	  }

	  setIsSubmitting(false)
	}, [state.errors]);

	function handleClose(event: React.SyntheticEvent | Event, reason?: string){
		if (reason === 'clickaway') {
			return;
	    }	

		setSnackbarOpen(false)
	}

	return (
		<>
			<Section heading='Contact me'>
				<div className='flex flex-col md:flex-row gap-4 w-full'>
					<Card className='w-full'>
						<form 
							className='flex flex-col gap-4 text-dark'
							onSubmit={(e)=>handleSubmit(e)}
							method='POST'
						>
							<input 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								type="text"
								placeholder='Name...'
								name='fname'
								value={formData.fname}
								onChange={(e) => {setFormData({...formData, fname: e.target.value})}}
								required
							/>
							<ValidationError 
								prefix="Name" 
								field="fname"
								errors={state.errors}
							/>
							<input 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								type="text"
								placeholder='Email...'
								name='email'
								value={formData.email}
								onChange={(e) => {setFormData({...formData, email: e.target.value})}}
								required
							/>
							<ValidationError 
								prefix="Email" 
								field="email"
								errors={state.errors}
							/>
							<textarea 
								className='
									bg-background shadow-neumorphism-inset w-full rounded-[1.125rem] p-4
								' 
								placeholder='Message...'
								name='message'
								rows={8}
								value={formData.message}
								onChange={(e) => {setFormData({...formData, message: e.target.value})}}
								required
							/>
							<ValidationError 
								prefix="Message" 
								field="message"
								errors={state.errors}
							/>
							<div className='flex justify-center'>
								<Button className='disabled:opacity-50' type='submit' onClick={handleClick} disabled={isSubmitting}>
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
							{isSubmitting && (
								<>
									<p className='text-sm'>Man, you created a Threads app and don&apos;t implemented simple form validation here ?! lol what 🤐</p>
									<p className='text-sm'>Uh oh, sorry ... I promise, i&apos;ll fix this 😅</p>
								</>
							)}
						</form>
					</Card>
					<Card className='w-full h-min shadow-neumorphism-inset flex flex-col justify-center items-center gap-4 text-center'>
						<p>ivshiryaev1999@gmail.com</p>
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
				autoHideDuration={5000} 
				onClose={handleClose}
			>
				<div className='flex gap-2 justify-center items-center px-4 py-2 rounded-md bg-green-500 text-darkTextPrimary'>
					<span><MdDone/></span>Received your message, i will reply soon
				</div>
			</Snackbar>
		</>
	)
}

export default ContactMe