// 头部信息
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import HeaderNav from "./components/HeaderNav";
import navList from "@/router/navList";
import styles from "./index.module.less";
const LayoutHeader = () => {
  const [activeKey, setActiveKey] = useState();
  const [num, setnum] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    try {
      navList.forEach((item) => {
        if (item.path === location.pathname) {
          setActiveKey(item.key);
          throw new Error();
        }
      });
    } catch (error) {}
  }, [location.pathname]);
  // 导航切换
  const onChangePath = useCallback((params) => {
    const { path } = params;
    navigate(path);
  }, []);
  // 去登录
  const onToLogin = () => {
    setnum(num + 1);
  };
  return (
    <div className={styles.layout_header}>
      <HeaderNav
        dataSource={navList}
        activeKey={activeKey}
        onChange={onChangePath}
      />
      <div className={styles.header_login} onClick={onToLogin}>
        登录{num}
      </div>
    </div>
  );
};
export default LayoutHeader;
