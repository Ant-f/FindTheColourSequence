import * as React from "react";
import * as styles from "../../stylesheets/sass/content-root.scss";
import HowToPlay from "../components/how-to-play/how-to-play-panel";
import GameBoardBase from "../containers/game-board-container";
import NewGamePanel from "../containers/new-game-panel-container";
import classes from "../helpers/classes";
import { IOwnProps as BoardOwnProps } from "../props/game-board-props";
import withModalProvider from "./modal-provider";

const GameBoard = withModalProvider<BoardOwnProps>(GameBoardBase);

interface IContentRootState {
  activePanel: Panel;
  previousPanel: Panel;
}

const enum Panel {
  GameBoard = "GameBoard",
  HowToPlay = "HowToPlay",
  NewGame = "NewGame",
}

const boardPanelClassnames: { [panel: string]: string } = {
  [Panel.GameBoard]: null,
  [Panel.HowToPlay]: styles.showBackPanelVertical,
  [Panel.NewGame]: styles.showBackPanelHorizontal,
};

export default class extends React.PureComponent<null, IContentRootState> {

  public componentWillMount() {
    this.setState({
      activePanel: Panel.GameBoard,
      previousPanel: null,
    });
  }

  public render() {
    return (
      <section className={styles.contentContainer}>
        <div className={classes(
          styles.rotatingPanel,
          boardPanelClassnames[this.state.activePanel])}>

          <div className={styles.frontPanelHost}>
            <GameBoard
              onHowToPlay={this.setActivePanelToHowToPlay}
              onNewGamePrompt={this.setActivePanelToNewGame} />
          </div>

          <div className={
            this.state.activePanel === Panel.HowToPlay ||
              this.state.previousPanel === Panel.HowToPlay
              ? styles.hide
              : styles.backPanelHostHorizontal}>
            <NewGamePanel onExitPanel={this.setActivePanelToGameBoard} />
          </div>

          <div className={
            this.state.activePanel === Panel.NewGame ||
              this.state.previousPanel === Panel.NewGame
              ? styles.hide
              : styles.backPanelHostVertical}>
            <HowToPlay onExitPanel={this.setActivePanelToGameBoard} />
          </div>
        </div>
      </section>
    );
  }

  private setActivePanelToGameBoard = () => {
    this.setActivePanel(Panel.GameBoard);
  }

  private setActivePanelToHowToPlay = () => {
    this.setActivePanel(Panel.HowToPlay);
  }

  private setActivePanelToNewGame = () => {
    this.setActivePanel(Panel.NewGame);
  }

  private setActivePanel = (panel: Panel): void => {
    this.setState((prevState: IContentRootState, props: null): IContentRootState => {
      return {
        activePanel: panel,
        previousPanel: prevState.activePanel,
      };
    });
  }
}
