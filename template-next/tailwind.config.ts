/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // add font family here
    },

    container: {
      // container class for the website
      screens: {
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        // add more colors here
        primary: '#BE272C',
        secondary: '#161615',
        error: '#FF173D',
        warning: '#FF9601',
        success: '#58B150',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        // add more box shadows here
        'toggle-shadow': 'inset 0px 1px 5px #000000CC',
      },
    },
  },

  plugins: [import('tailwindcss-animate')],
};
