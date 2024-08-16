/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      en_style: "Poppins, system-ui",
      bn_style: "Noto Serif Bengali, system-ui"
    },
    colors: {
      light :{
        light: "#fff",
      }
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

