/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		//domains: ['raw.githubusercontent.com', 'localhost'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
			},
		],
	},
};

export default nextConfig;
