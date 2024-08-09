/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"]
    },
    extend: {
      colors: {
        'main': '#ffae00'
      }
    },
  },
};
