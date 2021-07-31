module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          dark: '#222831',
          DEFAULT: '#222831',
          light: '#393E46'
        },
        teal: '#00ADB5',
        grey: '#EEEEEE'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
