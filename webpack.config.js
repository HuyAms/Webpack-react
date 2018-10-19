const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require("webpack-merge");

module.exports = ({mode} = {mode: "production"}) =>
    webpackMerge({
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin()
      ]
    },
        modeConfig(mode))
