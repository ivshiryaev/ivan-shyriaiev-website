import * as z from "zod";

const FormSchema = z.object({
	name: z.string()
		.min(1, {message: `At least 1 character required, unless you are Vendetta :)`})
		.max(30, {message: `Your name is longer than 30 letters, what ?! it was tough for you in the high school i think :(`})
		.trim(),
	email: z.string()
		.email({message: `Enter correct email adress`})
		.max(50, {message:`Less than 50 symbols`})
		.trim(),
	message: z.string()
		.nonempty({message:'Write something.... ✍'})
		.min(3, {message:'But more than 3 characters 🤨, i know you can do it better'})
		.max(300, {message: `SOOOOOOOO much text, think about an environment, STOP WASTING LETTERS!!!`})
		.endsWith('.',{message:'🤯 Maybe i am kinda annoying, but add a dot . at the end'})
		.trim(),
});

type FormValidation = z.infer<typeof FormSchema>

export type { FormValidation } 
export { FormSchema }