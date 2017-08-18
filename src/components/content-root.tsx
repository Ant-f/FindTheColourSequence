import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as boardStyles from "../../stylesheets/sass/game-board.scss";
import * as segmentStyles from "../../stylesheets/sass/sequence-segments.scss";
import SequenceAttempt from "../components/sequence-attempt";
import ColourSelect from "../containers/colour-select-container";
import ContentRootProps from "../props/content-root-props";
import ModalProviderProps from "../props/modal-provider-props";

type CombinedProps = ContentRootProps & ModalProviderProps;

export default class ContentRoot extends React.Component<CombinedProps> {

  public componentDidUpdate(prevProps: CombinedProps, prevState: CombinedProps) {
    if (this.props.isGameWon) {
      this.props.showModal(<span>Congratulations!</span>);
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
                            className={`${segmentStyles.small} ${sequenceSegmentsMap.get(feedbackSegment)}`}
                            key={`input-${inputIndex}-feedback-${feedbackIndex}`}>
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

          <ColourSelect />
        </div>
      </div>
    );
  }
}
