import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import reducer
import rootReducer from './store/reducers';
import "./scss/index.scss";
import App from "./App";

//create store with reducer
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  //wrap app with Provider tag
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
