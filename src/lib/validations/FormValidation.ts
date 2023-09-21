import * as z from "zod";

const FormSchema = z.object({
	name: z.string()
		.min(1, {message: `At least 1 character required, unless you are Vendetta :)`})
		.max(30, {message: `Your name is longer than 30 letters, what ?! it was tough for you in the high school i think :(`})
		.trim(),
	email: z.string()
		.email({message: `Enter your email here`})
		.max(50, {message:`Less than 50 symbols`})
		.trim(),
	message: z.string()
		.min(1, {message:'Type something'})
		.max(300, {message: `This is too much, 300 characters would be enough`})
		.trim(),
});

type FormValidation = z.infer<typeof FormSchema>

export type { FormValidation } 
export { FormSchema }