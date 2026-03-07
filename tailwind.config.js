/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
                accent: ['Instrument Serif', 'serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                'accent-glow': 'rgba(0, 102, 255, 0.4)',
            },
            animation: {
                'fade-in-down': 'fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
