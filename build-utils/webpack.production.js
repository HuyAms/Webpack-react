const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports = () => ({
  output: {
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ]
})
