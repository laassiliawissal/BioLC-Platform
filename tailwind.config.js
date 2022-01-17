module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark-lime-green": "#007f00",
        "strong-green": "#99cc00",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "very-light-gray": "#f9f9f9",
      }),
    },
  },
  plugins: [],
};
