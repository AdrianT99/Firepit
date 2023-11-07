/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1518px",
      // => @media (min-width: 768px) { ... }

      lg: "1903px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      container: {
        modalOpen: {
          overflow: "hidden",
        },
      },
    },
  },
  plugins: [],
};
