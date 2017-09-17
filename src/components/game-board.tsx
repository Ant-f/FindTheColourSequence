import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as buttonStyles from "../../stylesheets/sass/buttons.scss";
import * as panelStyles from "../../stylesheets/sass/content-panel.scss";
import * as letteringStyles from "../../stylesheets/sass/font-lettering.scss";
import * as boardStyles from "../../stylesheets/sass/game-board.scss";
import * as segmentStyles from "../../stylesheets/sass/sequence-segments.scss";
import SequenceAttempt from "../components/sequence-attempt";
import ColourSelect from "../containers/colour-select-container";
import TargetSequence from "../containers/target-sequence-container";
import classes from "../helpers/classes";
import { Colour } from "../model/colour";
import GameBoardProps from "../props/game-board-props";
import ModalProviderProps from "../props/modal-provider-props";
import BetterLuck from "./better-luck-banner";
import Congratulations from "./congratulations-banner";
import ContentPanel from "./content-panel";

type CombinedProps = GameBoardProps & ModalProviderProps;

const getNewGameButtonClasses = (isGameLost: boolean, isGameWon: boolean) => {
  const classNames = classes(
    buttonStyles.boardButton,
    isGameLost || isGameWon ? letteringStyles.pulsingTextColour : null,
    letteringStyles.defaultText);

  return classNames;
};

export default class extends React.Component<CombinedProps> {

  public componentDidUpdate(prevProps: CombinedProps, prevState: CombinedProps) {
    if (this.props.isGameWon) {
      this.props.showModal(<Congratulations />);
    }
    else if (this.props.isGameLost) {
      this.props.showModal(<BetterLuck />);
    }
  }

  public render() {
    return (
      <ContentPanel>
        <div>
          <div className={boardStyles.columnSet}>
            <div className={boardStyles.separator} />
            {
              this.props.data.map((d, inputIndex) =>
                <div key={`input-${inputIndex}`} className={boardStyles.columnSet}>
                  <div className={classes(
                    boardStyles.columnContent,
                    inputIndex > this.props.activeAttemptId
                      ? boardStyles.fade
                      : null)}>

                    <SequenceAttempt
                      attemptId={inputIndex}
                      colours={d.input}>
                    </SequenceAttempt>

                    <div className={boardStyles.feedbackSection}>
                      {
                        d.feedback.map((feedbackSegment, feedbackIndex) =>
                          <div
                            className={segmentStyles.zStack}
                            key={`input-${inputIndex}-feedback-${feedbackIndex}`}>

                            <div className={
                              feedbackSegment === Colour.None
                                ? null
                                : classes(segmentStyles.small, segmentStyles.segmentShadow)} />

                            <div
                              className={classes(
                                segmentStyles.small,
                                sequenceSegmentsMap.get(feedbackSegment))}>
                            </div>
                          </div>,
                        )
                      }
                    </div>
                  </div>

                  <div className={boardStyles.separator} />
                </div>,
              )
            }

            <TargetSequence />
          </div>

          <div className={panelStyles.boardFooter}>
            <ColourSelect />

            <div className={boardStyles.textButtonPanel}>
              <button
                className={classes(
                  buttonStyles.boardButton,
                  letteringStyles.defaultText)}
                onClick={this.props.onCheckSequence}>

                Check

            </button>

              <button
                className={classes(
                  buttonStyles.boardButton,
                  letteringStyles.defaultText)}
                onClick={this.props.onHowToPlay}>

                How to Play

            </button>

              <button
                className={getNewGameButtonClasses(
                  this.props.isGameLost,
                  this.props.isGameWon)}
                onClick={this.props.onNewGamePrompt}>

                New Game

            </button>
            </div>
          </div>
        </div>
      </ContentPanel>
    );
  }
}
