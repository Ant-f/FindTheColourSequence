import * as React from "react";
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
      <div style={{ display: "inline-grid" }}>
        {
          this.props.data.map((d, inputIndex) =>
            <div
              key={`input-${inputIndex}`}
              style={{ display: "inline-flex" }}>
              <SequenceAttempt
                attemptId={inputIndex}
                colours={d.input}>
              </SequenceAttempt>

              {
                d.feedback.map((feedbackSegment, feedbackIndex) =>
                  <div
                    key={`input-${inputIndex}-feedback-${feedbackIndex}`}
                    style={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
                    { feedbackSegment }
                  </div>,
                )
              }
            </div>,
          )
        }
        <ColourSelect />
      </div>
    );
  }
}
