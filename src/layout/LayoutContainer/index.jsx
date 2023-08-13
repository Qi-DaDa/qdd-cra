// 布局
import React from "react";
import { Routes, Route, Outlet } from "react-router";
import LayoutHeader from "../LayoutHeader";
import LayoutAside from "../LayoutAside";
import styles from "./index.module.less";
const LayoutContainer = () => {
  return (
    <div className={styles.layout_container}>
      <LayoutHeader />
      <div className={styles.layout_content}>
        {/* <LayoutAside /> */}
        <div className={styles.layout_main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutContainer;
