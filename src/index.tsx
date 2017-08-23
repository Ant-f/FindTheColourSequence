import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ContentHostBase from "./components/content-host";
import withModalProvider from "./components/modal-provider";
import GameBoardBase from "./containers/game-board-container";
import reducer from "./reducers/reducer";

const ContentHost = withModalProvider(ContentHostBase);
const GameBoard = withModalProvider(GameBoardBase);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ContentHost>
      <GameBoard />
    </ContentHost>
  </Provider>,
  document.getElementById("app-content"),
);
