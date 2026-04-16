/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans everything in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: 'media', // or 'class' if you use a toggle
  theme: {
    extend: {
      animation: {
        'cloud-slow': 'float 20s linear infinite',
        'cloud-fast': 'float 15s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110vw)' },
        }
      }
    },
  },
}
