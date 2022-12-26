const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // 生产环境模式
  mode: "production",
  devtool: false,
});
