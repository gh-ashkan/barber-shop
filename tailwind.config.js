/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      container :{
        center : true,
        padding : {
          DEFAULT : "1rem",
          lg : "0.625rem"
        }
      }
    },
  },
  plugins: [],
}