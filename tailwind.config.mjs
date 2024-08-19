import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['Share Tech', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'mech': {
                    100: 'rgb(var(--accent-light) / <alpha-value>)',
                    200: 'rgb(var(--accent) / <alpha-value>)',
                    300: 'rgb(var(--accent-extra) / <alpha-value>)',
                    400: 'rgb(var(--accent-extra2) / <alpha-value>)',
                    500: 'rgb(var(--accent-dark) / <alpha-value>)',
                }
            },
        },
	},
	plugins: [],
}
