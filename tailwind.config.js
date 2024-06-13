/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				EerieBlack: '#252422',
				BlackOlive: '#97918A'
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
