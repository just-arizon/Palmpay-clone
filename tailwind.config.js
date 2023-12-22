/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/*.html',
    './public/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundColor:
      {
        'brand-color':"#6A35ff"
      },
      textColor:{
        'brand-color':"#6A35ff"
      }
     },
     
   },
   variants: {
    extend: {
    }
   },
   plugins: [],
 }

