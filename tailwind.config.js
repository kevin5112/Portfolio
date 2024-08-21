/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8efd4',
        primaryAlt: '#edd792',
      },
      gridTemplateColumns: {
        2: '1fr 1fr',
        project1: '2fr 1fr',
        project2: '1fr 2fr',
      },
    },
    fontFamily: {
      bigShoulder: ['Big Shoulders Stencil Text', 'Helvetica', 'sans-serif'],
      monospace: ['Space Mono', 'Helvetica', 'sans-serif'],
      dosis: ['Dosis', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
};
