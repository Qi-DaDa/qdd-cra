const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV, SCRIPTS_TYPE, REACT_APP_A } = process.env;
console.log("====>", NODE_ENV, SCRIPTS_TYPE, REACT_APP_A);
// __dirname是node中的一个全局变量，它指向当前执行脚本所在的目录
const ROOT_PATH = path.resolve(__dirname, "../"); // 获取根目录地址
module.exports = {
  entry: {
    main: path.resolve(ROOT_PATH, "src/index.js"),
  },
  output: {
    path: path.resolve(ROOT_PATH, "build"),
    filename: "js/[name]_[hash:5].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"], // 自动补全后缀
    alias: {
      "@": path.resolve("src"), // 相对路径配置
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 提取公共模块
      name: "common",
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
    // 将属性转化为全局变量，让代码中可以正常访问
    new DefinePlugin({
      "process.env": {
        // NODE_ENV, // 添加mode后再环境中无法获取，默认在全局中获取
        SCRIPTS_TYPE,
        VERSION: "1.0.0",
      },
    }),
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
