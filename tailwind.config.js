const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.jsx'],
  theme: {
    screens: {
      // base iPhone SE (Jose Luis)
      xs: '375px', // iPhone X (Sofía y Kelsan)
      sm: '428px', // iPhone 12 Pro Max (Manu)
      md: '768px', // Tablet & Desktop
    },
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
