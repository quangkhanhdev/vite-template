import {Config} from "tailwindcss";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.tsx"],
  theme: {
    /** bootstrap responsive */
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        poppins: "Poppins, san-serif",
      },
    },
    plugins: [],
  },
} as Config;
