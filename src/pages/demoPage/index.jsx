import React from "react";
import logoImg from "@/assets/images/logo.svg";
import styles from "./index.module.less";

function DemoPage() {
  const onBtn = () => {
    throw new Error("23456");
  };
  return (
    <div className={styles.demo_page}>
      <img src={logoImg} alt="" />
      <h1>QDD-CRA</h1>
      <button type="button" onClick={onBtn}>
        按钮
      </button>
    </div>
  );
}
export default DemoPage;
