import * as React from "react";
import * as styles from "../../stylesheets/sass/content-root.scss";
import GameBoardBase from "../containers/game-board-container";
import NewGamePanel from "../containers/new-game-panel-container";
import classes from "../helpers/classes";
import { IOwnProps as BoardOwnProps } from "../props/game-board-props";
import withModalProvider from "./modal-provider";

const GameBoard = withModalProvider<BoardOwnProps>(GameBoardBase);
const activePanelKey = "activePanel";
const defaultPanel = styles.gameBoardHost;

export default class extends React.PureComponent {

  public componentWillMount() {
    this.setState({ [activePanelKey]: defaultPanel });
  }

  public render() {
    const state: { [key: string]: string } = this.state;
    return (
      <section className={styles.rootContainer}>
        <div className={classes(styles.rotatingPanel, state[activePanelKey])}>

          <div className={styles.gameBoardHost}>
            <GameBoard onNewGamePrompt={this.showNewGamePanel}/>
          </div>

          <div className={styles.newGamePanelHost}>
            <NewGamePanel onExitPanel={this.showGameBoardPanel} />
          </div>

        </div>
      </section>
    );
  }

  private showGameBoardPanel = () => {
    this.setState({ [activePanelKey]: defaultPanel });
  }

  private showNewGamePanel = () => {
    this.setState({ [activePanelKey]: styles.newGamePanelHost });
  }
}
