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
        'muted-white': '#FCFCFC',
        'secondary': '#9D9D9D'
      },
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config;
