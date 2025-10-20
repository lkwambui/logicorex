export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customdarkblue: '#0098FF',
        customlightblue: '#5FC6FF',
        darkGray: '#303030',
        lightGray: '##e5e7eb',
        accent: '#FF7F00',
      },
      fontFamily: {
        sans: ['Afacad', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
