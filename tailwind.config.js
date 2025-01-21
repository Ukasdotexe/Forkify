/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito Sans',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right bottom,#f38e82, #fbdb89)',
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
