/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: '767px',
      md: '1024px',
      lg: '1025px',
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      md: "16px",
      lg: "18px"
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}

