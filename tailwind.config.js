module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Dosis': ['Dosis', 'sans-serif'],
        'Urbanist' : ['Urbanist', 'sans.serif']
      },
      screens: {
        'sm': {'min': '0px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'xiketic': "#070014",
        'purple': '#231b32',
        'rhythm': '#766b8a',
        'bluebell': '#ada1c5',
        'lavander': '#f2ebff'
      },
      spacing: {
        '90%': '90vh',
        '80%': '80vh',
        '70%': '70vh',
        '50%': '50vh',
        '45%': '45vh',
        '40%': '40vh',
        '35%': '35vh',
        '30%': '30vh'
      }
      
    },
  },
  plugins: [],
}
