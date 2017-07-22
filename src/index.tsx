import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ContentRoot from "./containers/content-root-container";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ContentRoot/>
  </Provider>,
  document.getElementById("app-content"),
);
