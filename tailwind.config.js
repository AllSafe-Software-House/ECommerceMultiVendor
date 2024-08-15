const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
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
    plugins: [
      require('@tailwindcss/typography'),
      flowbite.plugin(),
    ],
  }
  ,
};
