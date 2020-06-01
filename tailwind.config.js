const fontDefault = ['BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.s[ac]ss',
    './src/**/*.css',
  ],
  theme: {
    fontFamily: {
      display: ['Lato'].concat(fontDefault),
      body: ['Lato'].concat(fontDefault),
      code: ['Monaco', 'Menlo', 'monospace'],
    },
  },
  variants: {},
  plugins: [],
}
