/** @type {import('tailwindcss').Config}*/
const config = {
	important: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
