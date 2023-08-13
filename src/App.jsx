import React, { Fragment, useState } from "react";
import ErrorBoundary from "./layout/ErrorBoundary/index";
import DemoPage from "./pages/demoPage";
// import LayoutContainer from "./layout/LayoutContainer1";
import RouterConfig from "./router";
import "./index.css";

function App() {
  const [num, setNum] = useState(0);
  return (
    // <Fragment>
    //   <ErrorBoundary>
    //     {/* <button onClick={() => setNum(num + 1)}>父=点击{num}</button>
    //     <LayoutContainer num={num} /> */}
    //     {/* <DemoPage /> */}
    //     <RouterConfig/>
    //   </ErrorBoundary>
    // </Fragment>
    <RouterConfig />
  );
}
export default App;
