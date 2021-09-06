const { fontFamily } = require(`tailwindcss/defaultTheme`);
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.css"],
  },
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
        variant: ["Tourney"],
      },
      screens: {
        xs: "420px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.current"),
            },
          },
        },
      }),
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.blueGray,
      primary: {
        100: "#e24756",
        200: "#e24756",
        300: "#df3141",
        400: "#d52132",
        500: "#BF1E2D",
        600: "#CC2132",
        700: "#A61B28",
        800: "#80141F",
        900: "#400A10",
      },
      secondary: {
        100: "#231F20",
        200: "#231F20",
        300: "#231F20",
        400: "#231F20",
        500: "#231F20",
        600: "#231F20",
        700: "#231F20",
        800: "#231F20",
        900: "#231F20",
      },
      tertiary: colors.teal,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  variants: {
    extend: {},
  },
};
