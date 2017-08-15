import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as styles from "../../stylesheets/sass/sequence-segments.scss";
import { IDispatchProps, IOwnProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps;

export default class SequenceSegment extends React.PureComponent<CombinedProps> {
  public render() {
    return (
      <button
        className={`${styles.large} ${sequenceSegmentsMap.get(this.props.colour)}`}
        onClick={(e) => this.props.onPositionSelected(
          this.props.attemptId,
          this.props.segmentId)}>
      </button>
    );
  }
}
