/** @type {import('tailwindcss').Config} */
module.exports = {
     content:  ["./src/**/*.{html,js}"],
    // ["./*.{html, js, services}"]
    theme: {
      screens:{
       sm :"480px",
       md: "768px",
       lg:"976px",
       xl: "1440px"
      },
      extend: {
        colors: {
          'gray':'#2c2d2c',
          'white': '#ffff',
          'royalblue': '#1f8ade',
          'gold': '#ddcf5c',
           'ash':'#feebeb',
           'navyblue':'#2b3c55'
        },
        maxHeight: {
          '128': '32rem',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }