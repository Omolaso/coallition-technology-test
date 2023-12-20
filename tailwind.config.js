/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
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
			roboto: ["roboto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
