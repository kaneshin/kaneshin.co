const path = require('path')
const glob = require('glob')
const fs = require('fs')
const marked = require("marked")
const hljs = require('highlight.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value
  }
})

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'pug-loader', options: { pretty: true } },
        ],
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader',
        ],
      },
    ],
  },

  plugins: [].concat(
    glob.sync('src/*.pug').map(function(v) {
      return new HtmlWebpackPlugin({
        filename: path.basename(v, '.pug') + '.html',
        template: v,
        inject: false,
      })
    })
  ).concat(
    // generate html from markdown of posts
    glob.sync('posts/20[0-9][0-9]/*.md').map(function(v) {
      return new HtmlWebpackPlugin({
        filename: path.join('posts', path.basename(v, '.md') + '.html'),
        templateParameters: {
          date: path.basename(v, '.md').match(/20[0-9]{2}(-[0-9]{2}){2}/)[0].split('-').join('/'),
          content: marked(fs.readFileSync(v, { encoding: "utf8" })),
        },
        template: 'src/templates/post.pug',
        inject: false,
      })
    })
  )

}
