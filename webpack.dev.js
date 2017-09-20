const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const webpack = require('webpack');

module.exports = merge(common(false), {
  devServer: {
    compress: true,
    port: 8080
  },

  plugins: [
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: null, // inline sourcemap
      test: /\.(tsx?|js)($|\?)/i // case-insensitive match for ts/js files
    })
  ]
});
