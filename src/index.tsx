import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ContentHost from "./components/content-host";
import withModalProvider from "./components/modal-provider";
import ContentRootBase from "./containers/content-root-container";
import reducer from "./reducers/reducer";

const ContentRoot = withModalProvider(ContentRootBase);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ContentHost>
      <ContentRoot />
    </ContentHost>
  </Provider>,
  document.getElementById("app-content"),
);
