module.exports = {
  theme: {
    extend: {
      height: {
        '36': '9rem',
        '44': '11rem',
        '6/10': '60%',
        '8/10': '80%',
        '11/12': '91.666%',
      },
      width: {
        '14': '3.5rem',
      },
      borderRadius: {
        'xl': '1em',
        '2xl': '2em',
        '3xl': '4em',
      },
      inset: {
        '10': '10px'
      },
    },
    fontFamily: {
      'sans': ['SF Text'],
    },
    transform: {
      'card-1-right': 'translateX(100%) scale(1)',
      'card-1-left': 'translateX(-100%) scale(1)',
      'card-2': 'translateY(75px) scale(0.88)',
      'card-3': 'translateY(60px) scale(0.92)',
      'card-4': 'translateY(30px) scale(0.96)',
      'card-5': 'translateY(0px) scale(1)',
      'card-flipped': 'translateX(-100%) rotateY(-180deg)'
    },
    translate: { // defaults to {}
      '1/2': '50%',
      'full': '100%',
      '55': '55px',
      '40': '40px',
      '20': '20px',
    },
    scale: { // defaults to {}
      '88': '0.88',
      '92': '0.92',
      '96': '0.96',
      '100': '1',
    },
    rotate: {
      '180': '180deg'
    },
    perspective: { // defaults to {}
      '1000': '1000px',
    },
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'orange': ['#FFB550', '#FF895D'],
      'blue': ['#50CCFF', '#5D71FF'],
      'white': ['#F8F8F8', '#FFFFFF'],
      'green-blue': ["#79EABC", "#47C4F2"],
      'purple-blue': ["#C1A6E5", "#47A6F2"]
    })
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('./plugins/gradients'),
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')({
      '3d': true,
    })
  ]
}
