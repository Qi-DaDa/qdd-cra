import React, { memo } from "react";
import styles from "./index.module.less";

const HeaderNav = ({ dataSource = [], onChange, activeKey }) => {
  console.log(9999);
  return (
    <div className={styles.header_nav}>
      {dataSource.map((item) => {
        return (
          <div
            key={item.key}
            className={`${styles.nav_cell} ${
              activeKey === item.key ? styles.nav_ceil_active : ""
            }`}
            onClick={() => onChange(item)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};
export default memo(HeaderNav);
