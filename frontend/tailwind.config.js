
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8b5cf6' // violet-500 vibe
        }
      },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
}
