import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],

	// daisyui: {
	// 	themes: [
	// 		"light",
	// 		{
	// 			black: {
	// 				...daisyUIThemes["black"],
	// 				primary: "rgb(29, 155, 240)",
	// 				secondary: "rgb(24, 24, 24)",
	// 			},
	// 		},
	// 	],
	// },
	// daisyui: {
	// 	themes: [
	// 		"light",
	// 		{
	// 			black: {
	// 				...daisyUIThemes["black"],
	// 				"base-100": "#1E1E1E", // background color
	// 				"base-200": "#2C2C2C", // slight contrast
	// 				"base-300": "#3A3A3A", // further contrast for cards/modals
	// 				"neutral": "#2A2A2A",
	// 				"neutral-focus": "#3D3D3D",
	// 				primary: "rgb(29, 155, 240)",
	// 				secondary: "rgb(24, 24, 24)",
	// 			},
	// 		},
	// 	],
	// },

	daisyui: {
		themes: [
			"light",
			{
				black: {
					...daisyUIThemes["black"],
					"base-100": "#121E2D", // main background
					"base-200": "#1C2A3A", // slightly lighter for cards, menus
					"base-300": "#223448", // even lighter for borders, modals
					"neutral": "#1A2633",
					"neutral-focus": "#2C3E50",
					primary: "rgb(29, 155, 240)", // Twitter blue
					secondary: "#1B1F2A", // muted dark secondary
					accent: "#3B82F6", // optional vibrant blue accent
					"base-content": "#E5EAF1", // light text for readability
				},
			},
		],
	},
	
	
};