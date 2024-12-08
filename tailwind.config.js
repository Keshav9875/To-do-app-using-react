/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{

        'lg':{'min':'851px','max':'1030px'},
        'md':{'min':'650px','max':'850px'},
        'sm':{'max':'649px'},
   
       }
    },
  },
  plugins: [],
}

