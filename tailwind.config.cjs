/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'orbitron': ['Orbitron', 'monospace'],
			'rajdhani': ['Rajdhani', 'sans-serif'],
			'exo': ['Exo 2', 'sans-serif'],
			'noto': ['Noto Sans']
		},
		extend: {
			spacing: {
				'carousel': 'calc(100vh - 3.5rem)',
			},
			animation: {
				'glow': 'glow 3s ease-in-out infinite',
				'border-glow': 'borderGlow 3s ease-in-out infinite',
				'slide-in-left': 'slideInLeft 0.8s ease-out',
				'slide-in-right': 'slideInRight 0.8s ease-out',
				'fade-in-up': 'fadeInUp 0.8s ease-out',
				'scanline': 'scanline 8s linear infinite',
			},
			boxShadow: {
				'glow-sm': '0 0 5px rgba(81, 146, 89, 0.3)',
				'glow': '0 0 15px rgba(81, 146, 89, 0.5)',
				'glow-lg': '0 0 30px rgba(81, 146, 89, 0.6)',
				'neon': '0 0 5px rgba(81, 146, 89, 0.5), 0 0 10px rgba(81, 146, 89, 0.3), 0 0 15px rgba(81, 146, 89, 0.2)',
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(rgba(81, 146, 89, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(81, 146, 89, 0.03) 1px, transparent 1px)',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			gray: colors.gray,

			// Brand colors
			'primary-green': 'rgb(var(--color-primary-green))',
			'dark-green': 'rgb(var(--color-dark-green))',
			'accent-green': 'rgb(var(--color-accent-green))',
			'neon-green': 'rgb(var(--color-neon-green))',

			// Monochrome
			'brand-black': 'rgb(var(--color-black))',
			'dark-bg': 'rgb(var(--color-dark-bg))',
			'card-bg': 'rgb(var(--color-card-bg))',

			// Accents
			active: 'rgb(var(--color-active))',
			'cyan-accent': 'rgb(var(--color-cyan-accent))',

			// Legacy support
			default: 'rgba(var(--color-default))',
			darkdefault: 'rgba(var(--color-darkdefault))',
			disabled: 'rgba(var(--color-disabled))',
			orange: 'rgba(var(--color-orange))',
			secondary: 'rgba(var(--color-secondary))',
		}
	},
	plugins: [],
}
