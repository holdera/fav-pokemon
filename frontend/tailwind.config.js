/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/utils/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#E3350D',
			secondary: '#FFCB08',
			'poke-red': '#E92727',
			'poke-orange': '#F57F01',
			'poke-green': '#53A93A',
			'poke-blue': '#1f67c4',
			'poke-purple': '#7D57A0',
			'poke-normal': '#7A7A7A',
		},
		extend: {},
	},
	plugins: [],
};
