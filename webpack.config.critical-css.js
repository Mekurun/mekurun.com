const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/top-main.js",
  output: {
    filename: "top-main.js",
    path: path.resolve(__dirname, "_site/assets/js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./_site/index.html"),
      filename: "index.html",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`_site/**/*`, { nodir: true }),
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.join(path.resolve(__dirname), "_site/"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      width: 375,
      height: 667,
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
