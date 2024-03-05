import { colors } from './src/styles/colors';
import { fontFamily } from './src/styles/fontFamily';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
