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
		],
	},
};

export default nextConfig;
