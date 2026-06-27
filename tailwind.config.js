/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15201C',
        cream: '#FAF7F1',
        teal: {
          DEFAULT: '#0F3D3E',
          dark: '#0A2B2C',
        },
        amber: '#E8A33D',
        clay: '#D9806B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
