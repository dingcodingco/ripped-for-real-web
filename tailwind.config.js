/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'primary-orange': '#FFA500',
        'dark-grey': '#1A1A1A',
        'medium-grey': '#333333',
        'light-grey': '#666666',
        'text-grey': '#999999',
        'success-green': '#4CAF50',
        'background': '#0A0A0A',
      },
    },
  },
  plugins: [],
}