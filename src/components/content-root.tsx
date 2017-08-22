import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import * as boardStyles from "../../stylesheets/sass/game-board.scss";
import * as segmentStyles from "../../stylesheets/sass/sequence-segments.scss";
import SequenceAttempt from "../components/sequence-attempt";
import ColourSelect from "../containers/colour-select-container";
import classes from "../helpers/classes";
import { Colour } from "../model/colour";
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

            <div className={lettering.gameTitle}>
              <p className={lettering.titleText}>
                <span className={lettering.f}>F</span>
                <span className={lettering.i}>i</span>
                <span className={lettering.n}>n</span>
                <span className={lettering.d}>d</span>

                <span className={classes(lettering.newWord, lettering.t)}>t</span>
                <span className={lettering.h}>h</span>
                <span className={lettering.e}>e</span>
              </p>

              <p className={lettering.titleText}>
                <span className={lettering.c}>C</span>
                <span className={lettering.o}>o</span>
                <span className={lettering.l}>l</span>
                <span className={lettering.o}>o</span>
                <span className={lettering.u}>u</span>
                <span className={lettering.r}>r</span>

                <span className={classes(lettering.newWord, lettering.s)}>S</span>
                <span className={lettering.e}>e</span>
                <span className={lettering.q}>q</span>
                <span className={lettering.u}>u</span>
                <span className={lettering.e}>e</span>
                <span className={lettering.n}>n</span>
                <span className={lettering.c}>c</span>
                <span className={lettering.e}>e</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
