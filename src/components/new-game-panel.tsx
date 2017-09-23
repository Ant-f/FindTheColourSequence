import * as React from "react";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as panelStyles from "../../stylesheets/sass/content-panel.scss";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import classes from "../helpers/classes";
import { defaultParameters, INewGameParameters } from "../model/new-game-parameters";
import NewGamePanelProps from "../props/new-game-panel-props";
import ContentPanel from "./content-panel";

export default class extends React.PureComponent<NewGamePanelProps, INewGameParameters> {
  constructor() {
    super();
    this.state = defaultParameters;
  }

  public render() {
    return (
      <ContentPanel>
        <div className={classes(lettering.defaultText, lettering.titleBadge)}>
          <h2>Start new game? All progress will be lost!</h2>

          <div>
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
                `Sequence will be ${this.state.colourSequenceLength} colours long`
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

            <label className={panelStyles.controlLabel}>
              {
                `Up to ${this.state.availableColourCount} different colours will be chosen from to form the sequence`
              }
              <input
                className={panelStyles.labelTarget}
                max={10}
                min={8}
                onChange={this.onAvailableColourCountChange}
                type="range"
                value={this.state.availableColourCount}>
              </input>
            </label>
          </div>

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
        availableColourCount: prevState.availableColourCount,
        colourSequenceLength: newValue,
      };
    });
  }

  private onAvailableColourCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;

    this.setState((prevState: INewGameParameters, props: null): INewGameParameters => {
      return {
        allowDuplicatesInTargetSequence: prevState.allowDuplicatesInTargetSequence,
        availableColourCount: newValue,
        colourSequenceLength: prevState.colourSequenceLength,
      };
    });
  }

  private onTargetDuplicatesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;

    this.setState((prevState: INewGameParameters, props: null): INewGameParameters => {
      return {
        allowDuplicatesInTargetSequence: newValue,
        availableColourCount: prevState.availableColourCount,
        colourSequenceLength: prevState.colourSequenceLength,
      };
    });
  }

  private ResetCurrentGame = (): void => {
    this.props.onResetCurrentGame(this.state);
    this.props.onExitPanel();
  }
}
