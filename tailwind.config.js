/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("@tailwindcss/typography")],
	darkMode: "class",
	future: {
		hoverOnlyWhenSupported: true,
	},
};