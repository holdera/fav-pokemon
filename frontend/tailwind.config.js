/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#E3350D',
			secondary: '#FFCB08',
			'poke-red': '#E92727',
			'poke-orange': '#F57F01',
			'poke-green': '#42C412',
			'poke-blue': '#6391CD',
			'poke-purple': '#7D57A0',
		},
		extend: {},
	},
	plugins: [],
};
