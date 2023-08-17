/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'760px',
      lg:'1024px'
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#FFCC00',
        paragraphColor:'#c8c8c8',
        whiteColor:'#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor:'#cc3433',
        darkkColor:'#000',
        darkColorLight:'#171717',
      },
      keyframes:{
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
   
  },
  plugins: [],
}
