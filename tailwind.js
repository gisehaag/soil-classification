module.exports = {
  important: true,
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#FFB400',
    }),

    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#FFB400',
    }),

    container: {
      center: true,
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
};
