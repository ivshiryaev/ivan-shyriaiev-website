/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.gifer.com',
			},
		],
	},
}

module.exports = nextConfig
