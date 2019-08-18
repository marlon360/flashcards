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
        '1': '1rem',
        '10': '10px',
        '1/2': '50%'
      },
      backgroundColor: {
        'overlay': 'rgba(26, 32, 44, 0.6)'
      },
      zIndex: {
        '-10': '-10'
      },
      margin: {
        '22': '5.5rem'
      },
      maxHeight: {
        '0': '0',
      }
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
      'card-flipped': 'rotateY(-180deg)',
      'popoverCorner': 'translateX(-50%) translateY(-40%) rotate(45deg)'
    },
    translate: { // defaults to {}
      '1/2': '50%',
      '1/10': '10%',
      '1/5': '20%',
      'full': '100%',
      '55': '55px',
      '40': '40px',
      '20': '20px',
      '1': '1rem',
    },
    scale: { // defaults to {}
      '88': '0.88',
      '92': '0.92',
      '96': '0.96',
      '100': '1',
    },
    rotate: {
      '180': '180deg',
      '45': '45deg'
    },
    perspective: { // defaults to {}
      '1500': '1500px',
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
    translate: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('./plugins/gradients'),
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')({
      '3d': true,
    })
  ]
}
