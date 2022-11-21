module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light","dark"],
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}

//Todo: add dark mode support for tailwindcss