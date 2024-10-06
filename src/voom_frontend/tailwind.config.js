/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS and JSX/TSX files in src folder
  ],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#9775FA'
      },
    },
  },
  plugins: [],
};

