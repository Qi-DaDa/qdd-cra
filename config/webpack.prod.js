const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // 开发环境模式
  mode: 'production',
  devtool: 'inline-source-map',
});
