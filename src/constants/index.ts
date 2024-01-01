const projects : ProjectInterface[] = [
	{
		number:4,
		title: 'Charity website',
		subtitle: 'Fundraising platform',
		description:`Fundraising platform for charity foundation where users can discover all the fundraisers and see all the donations.

What i made ?

- The whole design (mobiles, tablets, laptops),
- Front - end implementation,

- Integrated Stripe Payments,
- Connected MongoDB (all the Fundraisings data come from MongoDB),
- Webhooks from Stripe (when someone donate, a new donation created in the MongoDB),
- Display the latest donations for each fundraising,

- Zod, React Hook Form to handle forms,
- FormSpree to receive forms submissions,

- Animations made with Framer - motion`,
		website: 'https://fundacjaobokciebie.com',
		imageSrc: '/images/threads.jpg',
		imageWidth: 1334,
		imageHeight: 2000,
		githubLink: 'https://github.com/ivshiryaev/',
	},
	{
		number:3,
		title: 'Threads app',
		subtitle: 'Social network app',
		description:`Social media app where you can create, comment, like threads, search for new friends and create communities 🤗

(there is a 2-3 seconds delay after you perorm any action such as like search, etc... wait plz, serverless functions have to warm up a little 😥)

MongoDB - store all the data. (Users, Threads, Likes, Communities)
Clerk - handling authorization and registration.
Uploadthing - uploading files. (User Profile Images)
Zod - form validation. (For Threads)
Svix - to handle webhooks. (When the new community is created in Clerk, this community is duplicated in MongoDB)
Shadcn, Tailwind - ui.

If you want to check it out - you have to create an account
Don't worry, i dont use/sell your personal data

Registration is handled via Clerk, the fastest way to register - is to use a 0Auth via Google/Facebook/GitHub`,
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
		description:`Website for Polish e-commerce specialized in tincture making kits.

What i made ?

- Design
- Responsive Front - end implementation

- Shopping Cart (React context provider)
- Stripe Payments handled via Netlify serverless functions (each time when the user clicks 'buy', there is a new checkout.session created based on items in shopping cart)

- Contact form submissions via Netlify Forms

All the data is stored in single .json file instead of database

UPDATE:
Okay, after i made this project and look back on it, i know that it was a HUGE mistake to store the products in single .json especially on the client side
if hacker will change the price of the products the price will change in the checkout.session in stripe`,
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
		description:`Simple landing page for body psychologist.

My first 'serious' project haha 😁
Made with plain HTML, CSS, JS

The whole website written in single index.html file :)
(also there is a .script file with animations and utilities)

- Bootstrap (SCSS/SASS)
- HTML
- JS

I even implemented IntersectionObserverAPI and added animations, i remember when i did it, it was like a 'OMG i am so proud of myself, now Apple will hire me xDD'

Hosting on InfinityFree so you have to wait ~5 secs to open a website
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


