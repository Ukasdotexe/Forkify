/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'test.html'],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      screens: {
        xl: '1250px', // Overrides the default xl breakpoint
      },
      boxShadow: {
        custom: '0 0.7rem 3rem rgba(97, 85, 81, 0.08)', // Custom shadow
      },
      fontFamily: {
        nunito: 'Nunito Sans',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right bottom,#fbdb89 , #f38e82)',
      },
      colors: {
        'color-primary': '#f38e82',
        'color-grad-1': '#fbdb89',
        'color-grad-2': '#f48982',
        'color-grey-light-1': '#f9f5f3', // Light background
        'color-grey-light-2': '#f2efee', // Light lines
        'color-grey-light-3': '#d3c7c3', // Light text (placeholder)
        'color-grey-dark-1': '#615551', // Normal text
        'color-grey-dark-2': '#918581', // Lighter text
      },
    },
  },
  plugins: [],
};
