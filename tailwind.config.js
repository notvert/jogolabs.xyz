/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/images/banner-bg.png')",
      }
    },
    screens: {
      'exsm2': '390px',

      'exsm': '480px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      //  => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // d => @media (min-width: 1280px) { ... }

      'lg2': '1306px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}
