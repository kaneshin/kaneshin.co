module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.s[ac]ss',
    './src/**/*.css',
  ],
  theme: {
    fontFamily: {
      display: ['Lato', 'Ubuntu', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Lato', 'Ubuntu', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      code: ['Monaco', 'Menlo', 'monospace'],
    },
  },
  variants: {},
  plugins: [],
}
