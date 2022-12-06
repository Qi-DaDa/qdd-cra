const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// __dirname是node中的一个全局变量，它指向当前执行脚本所在的目录
const ROOT_PATH = path.resolve(__dirname, "../"); // 获取根目录地址
module.exports = {
  entry: {
    main: path.resolve(ROOT_PATH, "src/index.js"),
  },
  output: {
    path: path.resolve(ROOT_PATH, "build"),
    filename: "js/[name]_[hash:5].js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // 自动补全后缀
    alias: {
      "@": path.resolve("src"), // 相对路径配置
    },
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx $/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // 配置项在.babelrc
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            // loader: "style-loader",
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(jpg|svg|png)$/,
        loader: "file-loader",
        options: {
          name: "images/[name]_[hash:5].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, "public/index.html"),
      filename: "index.html",
    }), // 生成HTML
    new CleanWebpackPlugin(), // 清除build
    new MiniCssExtractPlugin({
      filename: "css/[name]_[hash:5].css",
    }), // css打包成单独文件
  ],
};
