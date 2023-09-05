function Footer() {
	const year : string = new Date().getFullYear()

	return (
		<footer className='p-4 w-full flex justify-center items-center text-sm text-gray'>
			<p>{year} © Ivan Shyriaiev. Full stack developer</p>
		</footer>
	)
}

export default Footer