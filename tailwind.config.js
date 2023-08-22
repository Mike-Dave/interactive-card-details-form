/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // linearGradient : hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
        red: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
