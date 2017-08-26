import * as React from "react";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import * as gameBoard from "../../stylesheets/sass/game-board.scss";
import classes from "../helpers/classes";
import NewGamePanelProps from "../props/new-game-panel-props";
import ContentPanel from "./content-panel";

export default class extends React.PureComponent<NewGamePanelProps> {
  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, lettering.titleBadge)}>
          <span>Start new game?</span>
          <span>All progress will be lost!</span>

          <div className={gameBoard.boardFooter}>
            <button
              className={classes(buttons.boardButton, lettering.defaultText)}
              onClick={this.ResetCurrentGame}>

              OK

            </button>

            <button
              className={classes(buttons.boardButton, lettering.defaultText)}
              onClick={this.props.onExitPanel}>

              Cancel

            </button>
          </div>
        </div>
      </ContentPanel>
    );
  }

  private ResetCurrentGame = (): void => {
    this.props.onResetCurrentGame();
    this.props.onExitPanel();
  }
}
