/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#D4621A',
          dark: '#1a1a1a',
          darker: '#111111',
          card: '#161616',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
