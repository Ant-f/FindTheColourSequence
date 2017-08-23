import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ContentHost from "./components/content-host";
import ContentRoot from "./components/content-root";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ContentHost>
      <ContentRoot />
    </ContentHost>
  </Provider>,
  document.getElementById("app-content"),
);
