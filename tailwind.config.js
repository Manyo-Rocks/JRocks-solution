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

        // background: "rgb(178,208,209)",
        // //  background:linear-gradient(90deg, 
        // //   rgba(178,208,209,0.9500175070028011) 11%,
        // //    rgba(60,207,210,0.9500175070028011) 57%,
        // //    rgba(244,238,238,1) 100%) 
        }
      },
    },
    plugins: [],
  }