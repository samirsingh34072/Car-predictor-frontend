/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#667085",
        line: "#DCE3EC",
        surface: "#F6F9FC",
        teal: {
          50: "#E9F8F6",
          100: "#CFF0EC",
          500: "#159587",
          600: "#0F766E",
          700: "#0A5C56"
        },
        coral: {
          500: "#F9735B"
        },
        gold: {
          500: "#F5B940"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(31, 44, 58, 0.12)",
        insetLine: "inset 0 0 0 1px rgba(220, 227, 236, 0.9)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
