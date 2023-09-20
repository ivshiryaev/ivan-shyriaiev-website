interface ProjectInterface {
	title?: string,
	description?: string,
	website?: string,
	imageSrc?: string,
	imageWidth?: number,
	imageHeight?: number,
	buttons?: {
		title: string,
		href: string,
	}[],
}

const projects : ProjectInterface[] = [
	{
		title: 'Threads app',
		description:`Social media app where you can create, comment, like threads, search for new friends and create communities 🤗

		(there is a 2-3 seconds delay after you perorm any action such as like search, etc... wait plz, this is a cons of free hosting on vercel 😥)

		MongoDB - store data.
		Clerk - handling authorization and registration.
		Uploadthing - uploading files.
		Zod - form validation.
		Svix - to handle webhooks.
		Shadcn, Tailwind - ui.`,
		website: 'https://threads-ivshiryaev.vercel.app/',
		imageSrc: '/images/threads.jpg',
		imageWidth: 1334,
		imageHeight: 2000,
		buttons: [
			{
				title:'Website',
				href:'https://threads-ivshiryaev.vercel.app/',
			},
			{
				title:'Github',
				href:'https://github.com/ivshiryaev/threads',
			},
		],
	},
	{
		title: 'E-commerce store',
		description:`Implemented:

		- Stripe API
		- Shopping Cart
		- Netlify serverless functions
		- Contact form submissions

		Design made in Figma. Photos are compressed in Photoshop. Stripe Payments integrated with Netlify serverless functions.Because there is not much data about products (only 16 products) i decided to store all the data in single .json file instead of relying on database`,
		website: 'https://kupaz.pl',
		imageSrc: '/images/kupaz.jpg',
		imageWidth: 1334,
		imageHeight: 2000,
		buttons: [
			{
				title:'Website',
				href:'https://kupaz.pl',
			},
			{
				title:'Github',
				href:'https://github.com/ivshiryaev/kupaz',
			},
		],
	},
	{
		title: 'Landing page',
		description:`Landing page for body psychologist.

		Things i used:

		- Bootstrap
		- HTML
		- JS
		`,
		website: 'https://karinavlasenko.com',
		imageSrc: '/images/karinaVlasenko.jpg',
		imageWidth: 1179,
		imageHeight: 2074,
		buttons: [
			{
				title:'Website',
				href:'https://karinavlasenko.com',
			},
			{
				title:'Github',
				href:'https://github.com/ivshiryaev/Karina-Vlasenko---Website',
			},
		],
	},
]

export { projects }