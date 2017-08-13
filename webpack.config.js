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
          namedExport: true
        }
      }, {
        loader: "sass-loader"
      }]
    }]
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // inline sourcemap
      test: /\.(ts|js)($|\?)/i // case-insensitive match for ts/js files
    }),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ])
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
