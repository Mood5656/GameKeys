module.exports = {
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn 0.6s ease-out forwards',
                fadeInUp: 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.6s ease-out forwards 0.1s',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    from: {
                        opacity: 0,
                        transform: 'translateY(10px)'
                    },
                    fadeInLeft: {
                        '0%': { opacity: '0', transform: 'translateX(-20px)' },
                        '100%': { opacity: '1', transform: 'translateX(0)' },
                    },
                    fadeInRight: {
                        '0%': { opacity: '0', transform: 'translateX(20px)' },
                        '100%': { opacity: '1', transform: 'translateX(0)' },
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0)'
                    },
                },
            },
        },
    },
    content: [
        './components/**/*.{js, vue, ts}',
        './pages/**/*.vue',
        './plugins/**/*.{js, ts}',
    ],
    plugins: []
}