/** @type {import('tailwindcss').Config} */

const {fontFamily} = require("tailwindcss/defaultTheme") 

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      fontFamily:{
        cookie:["--cookie_font",...fontFamily.sans]
      }
    }
  },
  plugins: [],
}
