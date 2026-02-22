/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Zinc 950
        surface: "#18181b",    // Zinc 900
        primary: "#a855f7",    // Purple 500
        secondary: "#ec4899",  // Pink 500
        accent: "#06b6d4",     // Cyan 500
      },
      animation: {
        'spin-x': 'spin-x 30s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'spin-x': {
          from: { transform: 'rotateX(0deg)' },
          to: { transform: 'rotateX(360deg)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}