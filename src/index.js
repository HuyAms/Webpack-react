import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";

const render = Component => {
  ReactDOM.render(<Component/>, document.getElementById("index"));
}

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => render(App));
}
