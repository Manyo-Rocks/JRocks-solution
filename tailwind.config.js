/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html, js}"],
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
          'darkblue': '#1f8ade',
          'yellow':'#e155e2',
        },
        maxHeight: {
          '128': '32rem',
        }
      },
    },
    plugins: [],
  }