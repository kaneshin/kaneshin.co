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
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1140px",
      xl: "1440px",
    },
    fontFamily: {
      display: ["Lato"].concat(fontDefault),
      body: ["Lato"].concat(fontDefault),
      article: ["Lato"].concat(fontHiragino).concat(fontDefault),
      code: ["Monaco", "Menlo", "monospace"],
    },
    extend: {
      colors: {
        red: {
          800: "#FC6775",
          900: "#FC6775",
        },
        green: {
          100: "#D4F7E5",
          200: "#A9EECB",
          300: "#7FE6B1",
          400: "#34DA9E",
          500: "#34DA9E",
          600: "#1ACE91",
          700: "#1ACE91",
          800: "#00C184",
          900: "#00C184",
        },
        gray: {
          100: "#F9FAFA",
          200: "#EBECED",
          300: "#D8D8D8",
          400: "#ACB1B5",
          500: "#8D9399",
          600: "#7D7D7D",
          700: "#494A4B",
          800: "#3E4448",
          900: "#3E4448",
        },
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
        // 'Npx': 'Npx'
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
        // 'Npx': 'Npx'
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
