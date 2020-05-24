const path = require('path')

module.exports = {

  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },

  // INFO: working on dev_appserver.py
  // devServer: {
  //   port: 3000,
  // }

  plugins: [],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } },
          'extract-loader',
          'html-loader',
          { loader: 'pug-html-loader', options: { pretty: true } }
        ]
      },
    ]
  }

}
