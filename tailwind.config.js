module.exports = {
  purge: {
    enabled: process.env.NODE_ENV == 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',

    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extends: {
        boxShadow: {
          outline: '0 0 0 1px rgba(66, 153, 255, 0.5)',
        },
        colors: {
          'orange-button': '#ff872e',
          'green-button': '#1ABC9C',
          'purple-hover': '#4C52F8',
          'purple-hover-stroke': '#8268FF',
          'purple-progress': '#3B41E3',
        },
        borderRadius:{
          20: '20px',
        }
      }
    },
  },
  fontFamily: {
    sans: ['Popins', 'sans-serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
