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
      },
      my_choice :{
        yellow_400: "rgb(250 204 21)",
        yellow_600: "rgb(202 138 4)",
        yellow_800: "rgb(133 77 14)"
      }
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

