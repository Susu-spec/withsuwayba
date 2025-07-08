 import type { Config } from 'tailwindcss';

const config: Config  = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'muted-white': '#FCFCFC'
      }
    },
  },
  plugins: [],
}

export default config;
