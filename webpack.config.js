const webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/dist"
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
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "typings-for-css-modules-loader",
            options: {
              camelCase: true,
              modules: true,
              namedExport: true,
              scss: true
            }
          }, {
            loader: "sass-loader"
          }
        ]
      }, {
        test: /\.(png)$/i,
        use: [{
            loader: "file-loader"
          }, {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // inline sourcemap
      test: /\.(tsx?|js)($|\?)/i // case-insensitive match for ts/js files
    }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ])
  ]
};
