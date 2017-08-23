import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as boardStyles from "../../stylesheets/sass/game-board.scss";
import * as segmentStyles from "../../stylesheets/sass/sequence-segments.scss";
import SequenceAttempt from "../components/sequence-attempt";
import ColourSelect from "../containers/colour-select-container";
import classes from "../helpers/classes";
import { Colour } from "../model/colour";
import GameBoardProps from "../props/game-board-props";
import ModalProviderProps from "../props/modal-provider-props";
import Congratulations from "./congratulations-banner";
import TitleBadge from "./title-badge";

type CombinedProps = GameBoardProps & ModalProviderProps;

export default class extends React.Component<CombinedProps> {

  public componentDidUpdate(prevProps: CombinedProps, prevState: CombinedProps) {
    if (this.props.isGameWon) {
      this.props.showModal(<Congratulations />);
    }
  }

  public render() {
    return (
      <div className={boardStyles.gameBoard}>
        <div className={boardStyles.noiseOverlay}>
          <div className={boardStyles.columnSet}>
            <div className={boardStyles.separator} />

            {
              this.props.data.map((d, inputIndex) =>
                <div key={`input-${inputIndex}`} className={boardStyles.columnSet}>
                  <div className={boardStyles.columnContent}>

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
          </div>

          <div className={boardStyles.boardFooter}>
            <ColourSelect />
            <TitleBadge />
          </div>
        </div>
      </div>
    );
  }
}
