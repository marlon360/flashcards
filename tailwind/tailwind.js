module.exports = {
  theme: {
    extend: {
      height: {
        '36': '9rem',
        '44': '11rem',
      },
      borderRadius: {
        'xl': '1em',
        '2xl': '2em',
        '3xl': '4em',
      },
    },
        fontFamily: {
          'sans': ['SF Text'],
        },
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'orange': ['#FFB550', '#FF895D'],
      'blue': ['#50CCFF', '#5D71FF'],
      'white': ['#FCFCFC', '#FFFFFF'],
      'green-blue': ["#79EABC", "#47C4F2"],
      'purple-blue': ["#C1A6E5", "#47A6F2"]
    })
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
      require('./plugins/gradients'),
      require('tailwindcss-transitions')()
  ]
}
