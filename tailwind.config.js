/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			black: "#000",
			white: "#fff",
			red: "#e31836",
			bgBlue: "#6366f1",
			gray: "#d1d5db",
			slate: "#64748b",
			cyan: "#0c4a6e",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
