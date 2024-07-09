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
          '100%': { boxShadow: '0 0 0 15px rgba(255, 152, 0, 0)' },
        }
      },
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
