// class组件
import React, { Component } from "react";
import ClassChildren from "./components/ClassChildren";
import styles from "./index.module.less";
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    console.log("父组件更新~");
    return (
      <div className={styles.class_component}>
        <div>
          <div>父级：{num}</div>
          <div
            className={styles.btn}
            onClick={() => this.setState({ num: num + 1 })}
          >
            按钮
          </div>
          <h2>挂载</h2>
          <ul>
            <li>constructor</li>
            <li>componentWillMount</li>
            <li>render</li>
            <li>componentDidMount</li>
          </ul>
          <h2>渲染</h2>
          <ul>
            <li>(props更新)componentWillReceiveProps</li>
            <li>shouldComponentUpdate</li>
            <li>componentWillUpdate</li>
            <li>render</li>
            <li>componentDidUpdate</li>
          </ul>
          <h2>卸载</h2>
          <ul>
            <li>componentWillUnmount</li>
          </ul>
          <h2>代替周期</h2>
          <ul>
            <li>getDerivedStateFromProps</li>
            <li>getSnapshotBeforeUpdate</li>
          </ul>
          <h2>错误边界</h2>
          <ul>
            <li>getDerivedStateFromError</li>
            <li>componentDidCatch</li>
          </ul>
        </div>
        <div>
          <ClassChildren num={num} />
        </div>
      </div>
    );
  }
}
export default ClassComponent;
