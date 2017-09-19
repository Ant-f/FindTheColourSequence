import * as React from "react";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as panelStyles from "../../stylesheets/sass/content-panel.scss";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import { INewGameParameters } from "../action/actions";
import classes from "../helpers/classes";
import NewGamePanelProps from "../props/new-game-panel-props";
import ContentPanel from "./content-panel";

export default class extends React.PureComponent<NewGamePanelProps, INewGameParameters> {
  constructor() {
    super();

    this.state = {
      allowDuplicatesInTargetSequence: false,
      colourSequenceLength: 4,
    };
  }

  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, lettering.titleBadge)}>
          <span>Start new game? All progress will be lost!</span>

          <label className={panelStyles.controlLabel}>
            Allow duplicates in hidden colour sequence?
            <input
              checked={this.state.allowDuplicatesInTargetSequence}
              className={panelStyles.labelTarget}
              onChange={this.onTargetDuplicatesChange}
              type="checkbox">
            </input>
          </label>

          <label className={panelStyles.controlLabel}>
            {
              `${this.state.colourSequenceLength} colours in sequence`
            }
            <input
              className={panelStyles.labelTarget}
              max={8}
              min={4}
              onChange={this.onColourSequenceLengthChange}
              type="range"
              value={this.state.colourSequenceLength}>
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

  private onColourSequenceLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;

    this.setState((prevState: INewGameParameters, props: null): INewGameParameters => {
      return {
        allowDuplicatesInTargetSequence: prevState.allowDuplicatesInTargetSequence,
        colourSequenceLength: newValue,
      };
    });
  }

  private onTargetDuplicatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    this.setState((prevState: INewGameParameters, props: null): INewGameParameters => {
      return {
        allowDuplicatesInTargetSequence: newValue,
        colourSequenceLength: prevState.colourSequenceLength,
      };
    });
  }

  private ResetCurrentGame = (): void => {
    this.props.onResetCurrentGame(this.state);
    this.props.onExitPanel();
  }
}
