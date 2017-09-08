const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "./dist/"
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
            namedExport: true,
            scss: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
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
    new webpack.SourceMapDevToolPlugin({
      filename: null, // inline sourcemap
      test: /\.(tsx?|js)($|\?)/i // case-insensitive match for ts/js files
    }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
    new ExtractTextPlugin("stylesheets/main.css")
  ]
};
