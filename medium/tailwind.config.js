/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bx: "rgba(0, 0, 0, 0.05) 0px 0px 4px, rgba(0, 0, 0, 0.15) 0px 2px 8px",
      },
    },
  },
  plugins: [],
};
