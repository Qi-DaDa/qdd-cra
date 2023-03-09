// 错误边界
import React, { Component, Fragment } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { isError: true };
  }
  // 统计页面的错误。发送请求发送到后台去
  componentDidCatch(error, info) {
    const stack = error.stack.split("\n");
    console.log("错误信息", stack, error, info);
  }
  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return (
      <Fragment>
        {/* 错误捕获 */}
        {isError ? (
          <div>
            <span>错误边界：</span>
            <span>当前页面异常</span>
          </div>
        ) : null}
        {/* 正常显示 */}
        {!isError ? <Fragment>{children}</Fragment> : null}
      </Fragment>
    );
  }
}
export default ErrorBoundary;
