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


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
