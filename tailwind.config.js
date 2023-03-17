const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.jsx'],
  theme: {
    extend: {
      spacing: {
        sidebar: '20rem', // w-80
      },
      colors: {
        darkend: colors.gray[900],
        lightend: colors.gray[100],
      },
      aspectRatio: {
        A4: '8.27 / 11.69',
        card: '384 / 224',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('children', '& *')
    },
  ],
}
