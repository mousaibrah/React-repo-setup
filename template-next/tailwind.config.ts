/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  theme: {
    // fontFamily: {
    //   sans: ['Inter', 'sans-serif'],
    //   mono: [
    //     'Monaco',
    //     'ui-monospace',
    //     'SFMono-Regular',
    //     'Menlo',
    //     'Consolas',
    //     'Liberation Mono',
    //     'Courier New',
    //     'monospace'
    //   ]
    // },
    container: {
      center: true,
      screens: {
        sm: '50rem',
      },
    },
    extend: {
      colors: {
        primary: '#292E7F',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
