import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("INDEX===>", process.env.NODE_ENV, process.env.REACT_APP_A);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
