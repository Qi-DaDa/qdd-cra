const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // 开发环境模式
  mode: 'development',
  // 启用source-map方便调试，将错误消息位置映射到模块
  devtool: 'source-map',
});
