interface ProjectInterface {
	number?: number,
	title?: string,
	subtitle?: string,
	description?: string,
	website?: string,
	imageSrc?: string,
	imageWidth?: number,
	imageHeight?: number,
	githubLink?: string,
}

const projects : ProjectInterface[] = [
	{
		number:3,
		title: 'Threads app',
		subtitle: 'Social network app',
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
		githubLink: 'https://github.com/ivshiryaev/threads',
	},
	{
		number: 2,
		title: 'Kupaz.pl',
		subtitle: 'E-commerce store',
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
		githubLink:'https://github.com/ivshiryaev/kupaz',
	},
	{
		number: 1,
		title: 'Landing page',
		subtitle: 'karinavlasenko.com',
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
		githubLink: 'https://github.com/ivshiryaev/Karina-Vlasenko---Website',
	},
]

const aboutMe = `I am 23 years old.
	Based in Gdańsk, Poland.

	I have started my journey in Programming from learning C++
	Then switched to C# and even created some games
	
	Interested in Programming, English Language and music.
	In my spare time i usually coding or doing gymnastics.`

const formSpreeUrl = 'https://formspree.io/f/mqkvbyra'

export { projects, aboutMe, formSpreeUrl }