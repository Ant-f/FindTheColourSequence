import * as React from "react";
import GameBoardBase from "../containers/game-board-container";
import withModalProvider from "./modal-provider";

const GameBoard = withModalProvider(GameBoardBase);

export default class extends React.PureComponent {

  public render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}
