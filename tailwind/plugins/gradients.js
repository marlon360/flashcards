// ./plugins/gradients.js
const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
    const gradients = theme('gradients', {})
    const degrees = _.range(0, 360, 10)
    const gradientVariants = variants('gradients', [])

    const utilities = _.map(gradients, ([start, end], name) => {
        var entries = {};
        entries[`.bg-gradient-${e(name)}`] = {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`
        };
        degrees.forEach((degree) => {
            entries[`.bg-gradient-${degree}-${e(name)}`] = {
                backgroundImage: `linear-gradient(${degree}deg, ${start}, ${end})`
            };
        })
        return entries;
    })

    addUtilities(utilities, gradientVariants)
}