const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __dirname是node中的一个全局变量，它指向当前执行脚本所在的目录
const ROOT_PATH = path.resolve(__dirname, '../'); // 获取根目录地址
module.exports = {
  entry: {
    bag: path.resolve(ROOT_PATH, 'src/index.js'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // // 自动补全后缀
    alias: {
      '@': path.resolve('src'), // 相对路径配置
    },
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx $/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '默认是齐大大',
      template: path.resolve(ROOT_PATH, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
};
