// class组件-子组件
import React, { memo, Component, PureComponent } from "react";
import styles from "./index.module.less";
class ClassChildren extends PureComponent {
  constructor(e) {
    super();
    this.state = {
      number: 0,
    };
    console.log("constuctor=>", e);
  }
  componentWillMount(e) {
    console.log("componentWillMount=>", e);
  }
  componentDidMount(e) {
    console.log("componentDidMount=>", e);
  }
  componentWillReceiveProps(e) {
    console.log("componentdefaultProps=>", e);
  }
  shouldComponentUpdate(a, b) {
    console.log("shouldComponentUpdate=>", a, b);
    return true;
  }
  componentWillUpdate(e) {
    console.log("componentWillUpdate=>", e);
  }
  componentDidUpdate(e) {
    console.log("componentDidUpdate=>", e);
  }
  componentWillUnmount(e) {
    console.log("componentWillUnmount=>", e);
  }
  // componentWillMount/componentWillUpdate/componentWillReceiveProps这三个的代替方案
  // static getDerivedStateFromProps(a, b) {
  //   console.log("getDerivedStateFromProps=>", a, b);
  // }
  // getSnapshotBeforeUpdate(a, b) {
  //   console.log("getSnapshotBeforeUpdate=>", a, b);
  // }
  // static getDerivedStateFromError(error) {
  // return { isError: true };
  // }
  // 统计页面的错误。发送请求发送到后台去
  // componentDidCatch(error, info) {
  // const stack = error.stack.split("\n");
  // console.log("错误信息", stack, error, info);
  // }

  render(e) {
    const { number } = this.state;
    const { num } = this.props;
    console.log("render=>", e);
    return (
      <div className={styles.class_children}>
        <div>父级:{num}</div>
        <div>子组件:{number}</div>
        <div
          className={styles.btn}
          onClick={() => this.setState({ number: number + 1 })}
        >
          按钮
        </div>
      </div>
    );
  }
}
export default ClassChildren;
