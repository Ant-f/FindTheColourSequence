import * as React from "react";
import * as styles from "../../stylesheets/sass/content-root.scss";
import GameBoardBase from "../containers/game-board-container";
import NewGamePanel from "../containers/new-game-panel-container";
import classes from "../helpers/classes";
import { IOwnProps as BoardOwnProps } from "../props/game-board-props";
import withModalProvider from "./modal-provider";

const GameBoard = withModalProvider<BoardOwnProps>(GameBoardBase);
const defaultPanel = styles.gameBoardHost;

interface IContentRootState {
  activePanel: string;
}

export default class extends React.PureComponent<null, IContentRootState> {

  public componentWillMount() {
    this.setState({ activePanel: defaultPanel });
  }

  public render() {
    return (
      <section className={styles.rootContainer}>
        <div className={classes(styles.rotatingPanel, this.state.activePanel)}>

          <div className={styles.gameBoardHost}>
            <GameBoard onNewGamePrompt={this.showNewGamePanel} />
          </div>

          <div className={styles.newGamePanelHost}>
            <NewGamePanel onExitPanel={this.showGameBoardPanel} />
          </div>

        </div>
      </section>
    );
  }

  private showGameBoardPanel = () => {
    this.setState({ activePanel: defaultPanel });
  }

  private showNewGamePanel = () => {
    this.setState({ activePanel: styles.newGamePanelHost });
  }
}
