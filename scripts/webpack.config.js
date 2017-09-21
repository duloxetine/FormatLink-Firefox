/* global __dirname */
const path = require("path");

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: {
    "content-script": "./content-script.js",
  },

  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "../src/theme.js")
    }
  },

  // externals: {
  //   mithril: "m"
  // },

  output: {
    path: path.resolve(__dirname, "../extension/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      }
    ]
  },

  plugins: [
  ],

  devtool: "source-map"

};
