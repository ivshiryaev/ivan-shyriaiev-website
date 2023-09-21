"use client"


import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import { FormValidation, FormSchema } from '@/lib/validations/FormValidation'


export default function App() {
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
			message: 'aklsdjalsjdlasjdlajslasljasljda',
		}
	})

	const processSubmit: SubmitHandler<FormValidation> = (data) => {
		reset()

		console.log(data)
	}

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(processSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input {...register("name")} />
			{errors?.name && <span>{errors.name.message}</span>}

			<input {...register("email")} />
			<textarea {...register("message")} />
			{errors?.message && <span>{errors.message.message}</span>}
			<input type="submit" />
		</form>
	)
}