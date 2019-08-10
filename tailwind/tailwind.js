module.exports = {
  theme: {
    extend: {},
    borderRadius: {
      'xl': '1em',
      '2xl': '2em',
      '3xl': '4em',
    },
    height: {
      '36': '9em'
    },
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'orange': ['#FFB550', '#FF895D'],
      'blue': ['#50CCFF', '#5D71FF'],
      'white': ['#FCFCFC', '#FFFFFF'],
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
