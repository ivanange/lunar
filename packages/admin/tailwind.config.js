const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './resources/assets/**/*.js',
        './resources/views/*.blade.php',
        './resources/views/**/*.blade.php',
        './resources/views/**/**/*.blade.php',
        './resources/views/**/**/**/*.blade.php',
        './resources/views/**/**/**/**/*.blade.php',
    ],
    safelist: [
        {
            pattern: /justify-(start|between|end)/,
            variants: ['sm', 'md', 'lg'],
        },
        {
            pattern: /items-(start|center|end)/,
            variants: ['sm', 'md', 'lg'],
        },
        {
            pattern: /flex-(1|auto|initial|none)/,
            variants: ['sm', 'md', 'lg'],
        },
        {
            pattern: /hidden/,
            variants: ['sm', 'md', 'lg'],
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'Nunito', ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                75: 75,
            },
            colors: {
                primary: colors.green,
                secondary: colors.slate,
                positive: colors.emerald,
                negative: colors.red,
                success: colors.lime,
                warning: colors.amber,
                info: colors.blue,
                danger: colors.red,
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
