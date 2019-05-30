/**
 * @file
 * This is the Webpack config!
 */

import HtmlWebpackPlugin from "html-webpack-plugin";
import { HotModuleReplacementPlugin } from "webpack";

module.exports = async (env = "development") => {
  return {
    mode: env,
    entry: ["./client/index.js"],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    },
    devtool: "source-map",
    plugins: [
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./server/index.js",
        templateParameters: {},
        filename: "index.html"
      })
    ]
  };
};
