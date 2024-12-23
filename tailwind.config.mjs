import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'mech': {
                    100: '#ebf7ff',
                    200: '#1968a8',
                    300: '#42c6eb',
                    400: '#caf2ca',
                    500: '#011265',
                }
            },
        },
	},
	plugins: [],
}
