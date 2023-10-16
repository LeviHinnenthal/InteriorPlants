const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      colors:{
        primary: {
          100:'#081323',
         
        },
        neutral: {
          100:'#C1D0E4',
        
        },
        page:'#FFFFFF',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

