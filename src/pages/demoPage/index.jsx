import React, { useState } from "react";
import CustomButtom from "@/components/CustomButtom";
import logoImg from "@/assets/images/logo.svg";
import CustomImage from "@/components/CustomImage";
import styles from "./index.module.less";

function DemoPage() {
  const [num, setNum] = useState(1);
  const onBtn = () => {
    setNum(num + 1);
  };
  return (
    <div className={styles.demo_page}>
      <h1>QDD-CRA</h1>
      <CustomImage
        alt="hahah"
        loading={111}
        width={200}
        src={[
          `https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`,
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuu1.png",
          logoImg,
        ]}
      />
      <h1>QDD-CRA</h1>
      <CustomButtom />
      <h1>{num}</h1>
      <button type="button" onClick={onBtn}>
        按钮
      </button>
    </div>
  );
}
export default DemoPage;
