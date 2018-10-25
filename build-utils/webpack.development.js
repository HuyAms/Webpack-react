const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].chunk.js',
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
    port: 8000,
    hot: true,
    open: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
})
