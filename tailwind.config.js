/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			content: {
				questionMark: 'url("./src/assets/question-mark.svg")',
			},
		},
	},
	plugins: [],
};
