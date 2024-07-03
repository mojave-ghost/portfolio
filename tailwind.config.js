module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],     // heading font
        'merriweather': ['Merriweather', 'serif'],      // body font
      },
      colors: {
        primary: '#1a237e',     // Deep blue
        secondary: '#f5f5f5',   // Light gray
        accent: '#ff9800',      // Orange
        text: '#333333',        // Dark gray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
