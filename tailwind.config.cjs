/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'noto': ['Noto Sans']
		},
		extend: {
			spacing: {
				'carousel': 'calc(100vh - 3.5rem)',
			}
		},
		colors: {
			white: colors.white,
			gray: colors.gray,
			default: 'rgba(var(--color-default))',
			darkdefault: 'rgba(var(--color-darkdefault))',
			disabled: 'rgba(var(--color-disabled))',
			active: 'rgba(var(--color-active))',
			orange: 'rgba(var(--color-orange))',
			secondary: 'rgba(var(--color-secondary))',
		  }
	},
	plugins: [],
}
