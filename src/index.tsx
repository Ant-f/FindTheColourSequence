import * as React from "react"
import * as ReactDOM from "react-dom"
import ContentRoot from "./components/content-root"
import reducer from "./reducers/reducer"
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <ContentRoot/>
  </Provider>,
  document.getElementById("app-content")
);