import * as React from "react";
import { IDispatchProps, IOwnProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps;

export default class SequenceSegment extends React.PureComponent<CombinedProps> {
  public render() {
    return (
      <button onClick={(e) => this.props.onPositionSelected(
          this.props.attemptId,
          this.props.segmentId)}>
        {
          this.props.colour
        }
      </button>
    );
  }
}
