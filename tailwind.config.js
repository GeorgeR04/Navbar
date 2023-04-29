/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textcolor':'#ff0000',
        'textcolor2':'#9801fc',


        "navbar1":'#000000',
        "navbar2":'#3b3a3a',
        "navbar3":'#abaaaa',
      },

      spacing:{
        "homeHeight":"95vh",

        'textitems':'180vh',
        'navitems':'13vh',
        'dropdown':'6rem',
        'sidedownleft':'5rem',
        'sidedowntop':'1.9rem',

      },

      fontFamily:{
        'body':['Bebas Neue','cursive'],

      },
    },
  },
  plugins: [],
}
