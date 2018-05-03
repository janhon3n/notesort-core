var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js"
  },
  module: {
     rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2016"]
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
