import * as React from "react";
import SequenceSegment from "../containers/sequence-segment-container";
import { IOwnProps } from "../props/sequence-attempt-props";

export default class SequenceAttempt extends React.Component<IOwnProps> {
  public render() {
    return (
      <div>
        {
          this.props.colours.map((colour, key) =>
            <SequenceSegment
              attemptId={this.props.attemptId}
              colour={colour}
              key={key}
              segmentId={key}>
            </SequenceSegment>,
          )
        }
      </div>);
  }
}
