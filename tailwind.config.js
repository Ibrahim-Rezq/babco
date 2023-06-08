/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
        themes: ['halloween', 'fantasy'],
    },
    theme: {
        extend: {
            minHeight: {
                page: 'calc(100vh - 5rem)',
            },
        },
    },
    plugins: [require('daisyui')],
}
