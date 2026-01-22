/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // DreamTales brand colors
        dream: {
          bg: '#1a1a2e',
          card: '#25253d',
          purple: '#7c3aed',
          blue: '#3b82f6',
          text: '#ffffff',
          muted: '#a0a0c0',
        },
      },
    },
  },
  plugins: [],
};