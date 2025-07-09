// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'bg-[#F8E2FF]',
      'bg-[#FFE6DD]',
      'bg-[#DEE8FF]',
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          tahoma: ['Tahoma', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  