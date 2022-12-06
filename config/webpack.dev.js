const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // 开发环境模式
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 9090,
    open: true,
    proxy: {
      "/devApi": {
        target: "https://bilitest.huitun.com",
        changeOrigin: true,
        pathRewrite: {
          "^/devApi": "",
        },
      },
    },
  },
});
