module.exports = {
  content: ['./app/**/*.{js,jsx}', './ui/**/*.jsx'],
  theme: {
    extend: {
      aspectRatio: {
        A4: '8.27 / 11.69',
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
