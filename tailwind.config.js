/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors: {
        'banner_color': 'rgb(149, 56, 226)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

