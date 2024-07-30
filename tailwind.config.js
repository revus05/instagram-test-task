/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'Arial', 'sans-serif'],
				// Здесь 'sans' - это имя шрифта по умолчанию для вашего проекта, можете добавить свои
			},
			colors: {
				primary: '#4991f3',
				'primary-active': '#1877f2',
				'secondary-btn': '#efefef',
				'secondary-btn-active': '#dbdbdb',
				secondary: '#8E8E8E',
			},
		},
	},
	plugins: [],
}
