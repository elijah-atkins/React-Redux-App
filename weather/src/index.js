import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import "./scss/index.scss";
import App from "./App";

//const store = createStore(null, applyMiddleware(thunk, logger))

ReactDOM.render(

    <React.StrictMode>
      <App />
    </React.StrictMode>,

  document.getElementById("root")
);
