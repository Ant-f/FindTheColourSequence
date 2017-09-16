import * as React from "react";
import * as buttons from "../../../stylesheets/sass/buttons.scss";
import * as panel from "../../../stylesheets/sass/content-panel.scss";
import * as lettering from "../../../stylesheets/sass/font-lettering.scss";
import * as styles from "../../../stylesheets/sass/how-to-play.scss";
import classes from "../../helpers/classes";
import { IOwnProps } from "../../props/how-to-play-panel-props";
import ContentPanel from "../content-panel";
import GuessFeedback from "./guess-feedback";
import Introduction1 from "./introduction-1";
import Introduction2 from "./introduction-2";
import MakingGuesses from "./making-guesses";

export interface IHowToPlayPanelState {
  currentPage: number;
}

export default class extends React.PureComponent<IOwnProps, IHowToPlayPanelState> {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
    };
  }

  get maxHelpPageCount(): number {
    return 4;
  }

  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, styles.mainContainer)}>
          <h1>
            How to Play
          </h1>

          <div className={styles.itemContainer}>
            <Introduction1 itemPage={1} currentPage={this.state.currentPage} />
            <Introduction2 itemPage={2} currentPage={this.state.currentPage} />
            <MakingGuesses itemPage={3} currentPage={this.state.currentPage} />
            <GuessFeedback itemPage={4} currentPage={this.state.currentPage} />
          </div>

          <div className={panel.boardFooter}>
            <div>
              <button
                className={classes(buttons.boardButton, lettering.defaultText)}
                onClick={this.props.onExitPanel}>

                Back to Game

              </button>
            </div>

            <div>
              <button
                className={classes(
                  buttons.boardButton,
                  lettering.defaultText,
                  styles.transportButton)}
                onClick={this.prevPage}>

                &lt; Prev

              </button>

              <button
                className={classes(
                  buttons.boardButton,
                  lettering.defaultText,
                  styles.transportButton)}
                onClick={this.nextPage}>

                Next &gt;

              </button>
            </div>

            <div className={styles.pageNumber}>
              {`${this.state.currentPage}/${this.maxHelpPageCount}`}
            </div>
          </div>
        </div>
      </ContentPanel>
    );
  }

  private nextPage = () => {
    this.setState((prevState: IHowToPlayPanelState, props: IOwnProps): IHowToPlayPanelState => {
      const updatedPage = prevState.currentPage + 1;
      return updatedPage > this.maxHelpPageCount
        ? prevState
        : { currentPage: prevState.currentPage + 1 };
    });
  }

  private prevPage = () => {
    this.setState((prevState: IHowToPlayPanelState, props: IOwnProps): IHowToPlayPanelState => {
      const updatedPage = prevState.currentPage - 1;
      return updatedPage < 1
        ? prevState
        : { currentPage: prevState.currentPage - 1 };
    });
  }
}
