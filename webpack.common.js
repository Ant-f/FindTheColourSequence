const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = function (isProduction) {
  return {
    entry: "./src/index.tsx",
  
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
      publicPath: "/dist/"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "typings-for-css-modules-loader",
            options: {
              camelCase: true,
              modules: true,
              minimize: isProduction,
              namedExport: true,
              scss: true
            }
          }, {
            loader: "sass-loader"
          }]
        })
      }, {
        test: /\.(png)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: "images/",
            publicPath: "../"
          }
        }, {
          loader: "image-webpack-loader"
        }]
      }]
    },

    plugins: [
      new ExtractTextPlugin("stylesheets/main.css")
    ]
  }
};
