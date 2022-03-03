const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./hw_webpack_babel_ts/src/index.tsx",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "./hw_webpack_babel_ts/dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./hw_webpack_babel_ts/src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
