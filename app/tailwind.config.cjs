/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        primary: '#facc15',
        body: '#22272e',
        bodySecondary: '#2d333b',
      },
    },
  },
  plugins: [],
};
