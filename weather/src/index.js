import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import reducer
import "./scss/index.scss";
import App from "./App";

//create store with reducer
//const store = createStore(null, applyMiddleware(thunk, logger))

ReactDOM.render(
//wrap app with Provider tag
    <React.StrictMode>
      <App />
    </React.StrictMode>,

  document.getElementById("root")
);
