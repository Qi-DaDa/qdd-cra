export const TpWatermark = (CON) => {
  const H = 150; //  水印行高
  const W = 200; // => 水印宽度
  const R = -16; //  => 旋转度数（可为负值）
  const C = "#d3cfcf"; // => 水印字体颜色
  const S = 20; //  => 水印字体的大小
  const O = 0.5; // => 水印透明度（0~1之间取值）

  // 判断水印是否存在，如果存在，那么不执行
  if (document.getElementById("tp-watermark") != null) {
    return;
  }
  const TpLine = parseInt(String((document.body.clientWidth - 200) / W)) * 2; // 一行显示几列
  let StrLine = "";
  for (let i = 0; i < TpLine; i++) {
    StrLine += `<span style="display: inline-block; line-height:${H}px; width:${W}px; text-align: center; transform:rotate(${R}deg); color:${C}; font-size:${S}px; opacity:${O};">${CON}</span>`;
  }
  const DivLine = document.createElement("div");
  DivLine.innerHTML = StrLine;

  const TpColumn = parseInt(String(document.body.clientHeight / H)) * 2; // 一列显示几行
  let StrColumn = "";
  for (let i = 0; i < TpColumn; i++) {
    StrColumn += `<div style="white-space: nowrap;">${DivLine.innerHTML}</div>`;
  }
  const DivLayer = document.createElement("div");
  DivLayer.innerHTML = StrColumn;
  DivLayer.id = "tp-watermark"; // 给水印盒子添加类名
  DivLayer.style.position = "fixed";
  DivLayer.style.top = "0px"; // 整体水印距离顶部距离
  DivLayer.style.left = "-100px"; // 改变整体水印的left值
  DivLayer.style.zIndex = "99999"; // 水印页面层级
  DivLayer.style.pointerEvents = "none";
  DivLayer.style.padding = "20px 100px";

  document.body.appendChild(DivLayer); // 到页面中
};
