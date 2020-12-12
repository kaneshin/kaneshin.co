const fontHiragino = ["Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "Hiragino Sans"];
const fontYuGothic = ["游ゴシック", "YuGothic", "Yu Gothic Medium", "Yu Gothic"];
const fontMeiryo = ["メイリオ", "Meiryo"];
const fontDefault = [
  "BlinkMacSystemFont",
  "-apple-system",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif",
];

module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1140px",
      xl: "1440px",
    },
    fontFamily: {
      display: ["Lato"].concat(fontHiragino).concat(fontDefault),
      body: ["Lato"].concat(fontHiragino).concat(fontDefault),
      code: ["Monaco", "Menlo", "monospace"],
    },
    textColor: theme => ({
      sun: "#E84600",
      moon: "#FEEF5F",
      ...theme("colors"),
      default: theme("colors.gray.800", "currentColor"),
    }),
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.gray.200", "currentColor"),
    }),
    extend: {
      colors: {
        facebook: "#3975E9",
        twitter: "#1DA1F2",
        hatena: "#00A4DE",
        linkedin: "#0E76A8",
      },
      opacity: {
        0: "0",
        10: ".1",
        20: ".2",
        30: ".3",
        40: ".4",
        50: ".5",
        60: ".6",
        70: ".7",
        80: ".8",
        90: ".9",
        100: "1",
      },
      fontSize: {
        ...[...Array(121).keys()].reduce((acc, val, _) => {
          const key = `${val}px`;
          acc[key] = key;
          return acc;
        }, {}),
      },
      spacing: {
        "screen-sm": "640px",
        "screen-md": "960px",
        "screen-lg": "1140px",
        "screen-xl": "1440px",
        ...[...Array(401).keys()].reduce((acc, val, _) => {
          const key = `${val}px`;
          acc[key] = key;
          return acc;
        }, {}),
      },
    },
  },
  variants: {
    fontSmoothing: ["responsive", "hover", "focus"],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
