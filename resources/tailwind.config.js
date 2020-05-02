/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: [require('@tailwindcss/ui'), require('@tailwindcss/custom-forms')]
}
