import * as React from "react";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as panelStyles from "../../stylesheets/sass/content-panel.scss";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import classes from "../helpers/classes";
import NewGamePanelProps from "../props/new-game-panel-props";
import ContentPanel from "./content-panel";

interface INewGamePanelState {
  allowDuplicatesInTargetSequnce: boolean;
}

export default class extends React.PureComponent<NewGamePanelProps, INewGamePanelState> {
  constructor() {
    super();

    this.state = {
      allowDuplicatesInTargetSequnce: false,
    };
  }

  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, lettering.titleBadge)}>
          <span>Start new game? All progress will be lost!</span>

          <label>
            Allow duplicates in hidden colour sequence?
            <input
              type="checkbox"
              onChange={this.onTargetDuplicatesChange}
              checked={this.state.allowDuplicatesInTargetSequnce}>
            </input>
          </label>

          <div className={panelStyles.boardFooter}>
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

  private onTargetDuplicatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      allowDuplicatesInTargetSequnce: event.target.checked,
    });
  }

  private ResetCurrentGame = (): void => {
    this.props.onResetCurrentGame(this.state.allowDuplicatesInTargetSequnce);
    this.props.onExitPanel();
  }
}
