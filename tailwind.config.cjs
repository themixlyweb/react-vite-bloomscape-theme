module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['EvergreenSans','ui-sans-serif','system-ui'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        evergreen: {
          50: '#f6f9f6',
          100: '#eaf2ea',
          500: '#2f7a4a',
          700: '#245f39'
        }
      }
    }
  },
  plugins: []
}
