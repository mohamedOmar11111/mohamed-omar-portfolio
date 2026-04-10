/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        primary: '#00d1b2', // Cyan accent from Marjo
        secondary: '#FFDD00', // Yellow accent
        surface: '#111111',
        border: '#222222',
        textMuted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
