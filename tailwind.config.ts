import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/global.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tight': ['"Inter Tight"', 'sans-serif'],
      },
      colors: {
        'muted-white': '#FCFCFC',
        'secondary': '#9D9D9D',
      },
    },
  },
  plugins: [],
};

export default config;
