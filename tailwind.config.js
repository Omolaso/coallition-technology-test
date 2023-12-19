/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: { black: "#000", white: "#fff" },
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
