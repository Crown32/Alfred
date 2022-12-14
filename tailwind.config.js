module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}

//Todo: add dark mode support for tailwindcss