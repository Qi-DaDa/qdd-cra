import React, { Component } from "react";
class LayoutContainer extends Component {
  constructor(props, b) {
    console.log("constructor", props, b);
    super(props);
    this.state = {
      num: 0,
    };
  }
  componentWillReceiveProps(a, b) {
    console.log("componentWillReceiveProps=>", a, b);
  }
  // componentWillMount/componentWillUpdate/componentWillReceiveProps这三个的代替方案
  // static getDerivedStateFromProps(a, b) {
  //   console.log("getDerivedStateFromProps=>", a, b);
  // }
  componentWillMount(a, b) {
    console.log("componentWillMount=>", a, b);
  }
  componentDidMount(a, b) {
    console.log("componentDidMount=>", a, b);
  }
  shouldComponentUpdate(a, b) {
    console.log("shouldComponentUpdate=>", a, b);
    return true;
  }
  componentWillUpdate(a, b) {
    console.log("componentWillUpdate=>", a, b);
  }
  componentDidUpdate(a, b) {
    console.log("componentDidUpdate=>", a, b);
  }
  // getSnapshotBeforeUpdate(a, b) {
  //   console.log("getSnapshotBeforeUpdate=>", a, b);
  // }
  componentWillUnmount(a, b) {
    console.log("componentWillUnmount=>", a, b);
  }
  render(a, b) {
    console.log("render=>", a, b);
    const { num } = this.state;
    return (
      <div>
        <h2>挂载</h2>
        <ul>
          <li>constructor</li>
          <li>componentWillMount</li>
          <li>render</li>
          <li>componentDidMount</li>
        </ul>
        <h2>渲染</h2>
        <ul>
          <li>---componentWillReceiveProps---</li>
          <li>shouldComponentUpdate</li>
          <li>componentWillUpdate</li>
          <li>render</li>
          <li>componentDidUpdate</li>
        </ul>
        <h2>卸载</h2>
        <ul>
          <li>componentWillUnmount</li>
        </ul>

        <h1>{num}</h1>
        <h2>{this.props.num}</h2>
        <button onClick={() => this.setState({ num: num + 1 })}>点击</button>
      </div>
    );
  }
}
export default LayoutContainer;
