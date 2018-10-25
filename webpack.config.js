const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require("webpack-merge");
const presetConfig = require("./build-utils/loadPresets");
const path = require('path');

module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
  return  webpackMerge(
      {
        mode,
        output: {
          path: path.resolve(__dirname, "dist")
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: "babel-loader"
            },
            {
              test: /\.jpe?g$/,
              use: [{
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }]
            }
          ]
        }
      },
      modeConfig(mode),
      presetConfig({ mode, presets })
  )

}
