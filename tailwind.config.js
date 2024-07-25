/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8efd4',
      },
      gridTemplateColumns: {
        2: '1fr 1fr',
        project1: '2fr 1fr',
        project2: '1fr 2fr',
      },
    },
    fontFamily: {
      bigShoulder: ['Big Shoulders Stencil Text', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
};
