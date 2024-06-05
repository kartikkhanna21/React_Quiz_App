module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '48': '48%',
        '975':'975px',
        '49': '49%',
      },
      colors: {
        'custom-blue': '#0094da',
        'custom-green': '#1ea55b',
      },
      spacing: {
        '30': '30px',
      },
      height:{
        '70':'70px',
      }
    },
  },
  plugins: [],
}
