// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2F855A', // Màu xanh lá đậm
        'primary-light-green': '#38B2AC', // Màu xanh lá nhạt
        'primary-dark-green': '#276749', // Màu xanh lá đậm hơn cho hover
        'neutral-dark': '#4A5568', // Màu xám đậm cho văn bản
        'neutral-light': '#A0AEC0', // Màu xám nhạt cho văn bản
      },
    },
  },
  plugins: [],
};
