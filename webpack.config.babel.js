/**
 * @file
 * This is the Webpack config!
 */

import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractCss from "extract-css-chunks-webpack-plugin";
import { HotModuleReplacementPlugin } from "webpack";
import dartSass from "sass";

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
        },
        {
          test: /client\/.+\.scss/,
          resolve: {
            extensions: [".scss", ".sass"]
          },
          use: [
            ExtractCss.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            {
              loader: "sass-loader",
              options: {
                implementation: dartSass,
                sourceMap: true,
                includePaths: ["bower_components"]
              }
            }
          ]
        }
      ]
    },
    devtool: "source-map",
    plugins: [
      new ExtractCss(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./server/index.js",
        templateParameters: {},
        filename: "index.html"
      })
    ]
  };
};
