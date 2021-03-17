module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 #4c566a",
      DEFAULT: "0 1px 3px 0 #4c566a, 0 1px 2px 0 #4c566a",
      md: "0 4px 6px -1px #4c566a, 0 2px 4px -1px #4c566a",
      lg: "0 10px 15px -3px #4c566a, 0 4px 6px -2px #4c566a",
      xl: "0 20px 25px -5px #4c566a, 0 10px 10px -5px #4c566a",
      "2xl": "0 25px 50px -12px #4c566a ",
      "3xl": "0 35px 60px -15px #4c566a",
      inner: "inset 0 2px 4px 0 #4c566a",
      none: "none",
    },
    extend: {
      colors: {
        nord: {
          0: "#2e3440",
          1: "#3b4252",
          2: "#434c5e",
          3: "#4c566a",
          4: "#d8dee9",
          5: "#e5e9f0",
          6: "#eceff4",
          7: "#8fbcbb",
          8: "#88c0d0",
          9: "#81a1c1",
          10: "#5e81ac",
          11: "#bf616a",
          12: "#d08770",
          13: "#ebcb8b",
          14: "#a3be8c",
          15: "#b48ead",
        },
      },
      height: {
        72: "18rem",
        144: "36 rem",
        216: "54rem",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [],
};
