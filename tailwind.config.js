/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#392137',

					secondary: '#ed614a',

					accent: '#faebd580',

					neutral: '#191D1F',

					'base-100': '#F3F3F7',

					info: '#778AE9',

					success: '#14A95C',

					warning: '#F0B80F',

					error: '#F92F3D',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
