const path = require('path')
const glob = require('glob')
const fs = require('fs')
const marked = require("marked")
const hljs = require('highlight.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

marked.setOptions({
  highlight: (code, lang) => {
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

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3380,
      proxy: 'http://localhost:3388',
    }),
  ].concat(
    glob.sync('src/*.pug').map((v) => {
      return new HtmlWebpackPlugin({
        filename: path.basename(v, '.pug') + '.html',
        template: v,
      })
    })
  ).concat(
    // generate html from markdown of posts
    glob.sync('posts/20[0-9][0-9]/*.md').map((v) => {
      return new HtmlWebpackPlugin({
        filename: path.join('blog', path.basename(v, '.md') + '.html'),
        templateParameters: {
          date: path.basename(v, '.md').match(/20[0-9]{2}(-[0-9]{2}){2}/)[0].split('-').join('/'),
          content: marked(fs.readFileSync(v, { encoding: "utf8" })),
        },
        template: 'src/templates/post.pug',
      })
    })
  )

}
