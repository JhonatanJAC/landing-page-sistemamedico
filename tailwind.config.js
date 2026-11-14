/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00bac7', // Primary Brand Turquoise
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          dark: '#0f4c81', // Medical Blue
          navy: '#0a2540',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1eb855',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
