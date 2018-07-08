const webpack = require('webpack');

module.exports = {
  mode: "development",
  node: {
    fs: "empty",
    child_process: "empty"
  },
  entry: './src/app.lua',
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/
      },
      {
        test: /\.lua$/,
        use: [
          "fengari-loader"
        ]
      }
    ]
  },
  devServer: {
      contentBase: './',
      port: 8081,
      noInfo: false,
      hot: true,
      inline: true,
      proxy: {
          '/': {
              bypass: function (req, res, proxyOptions) {
                return './public/fengari.html';
              }
          }
      }
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
}
