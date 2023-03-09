import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import errImg from "@/assets/images/default.png";
import styles from "./index.module.less";
const CustomImage = (props) => {
  const { src, loading, width, height, ...otherProps } = props;
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //判断src类型
    if (typeof src === "string") {
      setImgSrc(src);
    } else {
      setImgSrc(src[0]);
    }
  }, [src]);
  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  // 图片加载出错
  const onError = (e) => {
    if (typeof src === "string") {
      setImgSrc(errImg);
    } else {
      let newSrc = "";
      try {
        for (let index = 0; index < src.length; index++) {
          if (imgSrc === src[index] && index !== src.length - 1) {
            newSrc = src[index + 1];
            throw new Error();
          }
          if (index === src.length - 1) {
            newSrc = errImg;
          }
        }
      } catch (error) {}
      setImgSrc(newSrc);
    }
  };
  // 加载成功
  const onLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className={styles.custom_image} style={{ width, height }}>
      <img
        src={imgSrc}
        onError={onError}
        onLoad={onLoad}
        height={height || "auto"}
        {...otherProps}
      />
      {isLoading ? (
        <div className={styles.image_loading}>
          <div className={styles.loadign_box}></div>
        </div>
      ) : null}
    </div>
  );
};
export default memo(CustomImage, (prevProps, nextProps) => {
  if (prevProps.src instanceof Array) {
    return prevProps.src[0] === nextProps.src[0];
  }
  return false;
});
