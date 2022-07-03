module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      scale: {
        103: "1.03",
      },
      fontFamily: {
        OpenSans: ["'Open sans'", "sans-serif"],
      },
      height: {
        600: "37.5rem",
        700: "40rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
