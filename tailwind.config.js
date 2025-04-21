/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./features/**/components/*.{js,jsx,ts,tsx}", "./shared/**/components/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'product-sans': ['ProductSans-Regular'],
        'product-sans-bold': ['ProductSans-Bold'],
      },
    },
  },
  plugins: [],
}

