/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: "true",
			padding: "1rem",
			screens: {
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},

		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				open: ["Open Sans", "sans-serif"],
			},

			colors: {
				pink: "hsl(322, 100%, 66%)",
				verypalecyan: "hsl(193, 100%, 96%)",
				verydarkcyan: "hsl(192, 100%, 9%)",
				grayishblue: "hsl(208, 11%, 55%)",
			},

			spacing: {
				128: "32rem",
				160: "40rem",
				18: "4.05rem",
			},
		},
	},
	plugins: [],
};
