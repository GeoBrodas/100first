module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './Layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        CustomGreen: '#c9e265',
        CustomDark: '#253439',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      CustomGreen: '#c9e265',
      CustomeDark: '#253439',
    }),
  },
  plugins: [],
};
