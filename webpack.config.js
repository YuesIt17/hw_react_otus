const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/hw_webpack_babel_ts/index.tsx",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "./src/hw_webpack_babel_ts/dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/hw_webpack_babel_ts/index.html",
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
