module.exports = {
  theme: {
    extend: {},
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')]
    })
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
      require('./plugins/gradients')
  ]
}
