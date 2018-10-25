const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].chunk.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    open: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
