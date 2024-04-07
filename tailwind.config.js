export default {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,json}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bahnschrift', 'sans-serif']
      },
      maxWidth: {
        'screen-xs': '360px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1240px'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}