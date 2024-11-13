import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#80f0ff",
          200: "#6ce5e8",
          300: "#41b8d5",
          400: "",
        },
        secondary: {
          100: "#0c1718",
          200: "#000000",
        },
        tertiary: {
          100: "#379094",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
