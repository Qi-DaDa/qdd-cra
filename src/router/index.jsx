// 路由配置文件
import React from "react";
import { Routes, Route, Outlet } from "react-router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import LayoutHeader from "../layout/LayoutHeader";
import HomePage from "../pages/HomePage";
import DemoPage from "../pages/demoPage";
import LoginPage from "../pages/LoginPage";
import NoPage from "../pages/NoPage";
import ClassComponent from "../pages/ClassComponent";
import LayoutContainer from "../layout/LayoutContainer";

const RouterConfig = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LayoutContainer />} path="/main">
          <Route element={<DemoPage />} path="/main/demo" />
          <Route element={<NoPage />} path="/main/404" />
          <Route element={<ClassComponent />} path="/main/class_component" />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default RouterConfig;
