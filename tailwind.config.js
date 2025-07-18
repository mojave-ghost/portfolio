module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'border-color-change': 'border-color-change 2s infinite',
        'shadow-pulse': 'shadow-pulse 2s infinite',
      },
      keyframes: {
        'border-color-change': {
          '0%, 100%': { borderColor: '#ff9800' },
          '50%': { borderColor: '#1a237e' },
        },
        'shadow-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 152, 0, 0.7)' },
          '100%': { boxShadow: '0 0 0 20px rgba(255, 152, 0, 0)' },
        }
      },
      fontFamily: {
        'montserrat':    ['Cinzel', 'serif'],           // for headings and a more fantasy feel
        'merriweather':  ['Roboto', 'sans-serif'],      // for readability and modern look
      },
      colors: {
        primary:   '#6b8e23',     // Forest Green
        secondary: '#f7f5f3',   // Hobbit Cream
        accent:   '#d2691e',      // Autumn Orange
        text:     '#333333',        // Dark gray
        support1: '#2d4a2b',    // Deep Forest Green
        support2: '#8b7355',    // Earthly Brown
        support3: '#d4af37',    // Gold Ring
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
