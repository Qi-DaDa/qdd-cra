// 官网首页
import React, { useEffect } from "react";
import aa from "@/utils/methods";
import { TpWatermark } from "@/utils/watermark";

const HomePage = () => {
  useEffect(() => {
    TpWatermark("七大大");
  }, []);

  return <div>官网首页</div>;
};
export default HomePage;
