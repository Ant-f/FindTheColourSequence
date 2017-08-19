import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as styles from "../../stylesheets/sass/sequence-segments.scss";
import classes from "../helpers/classes";
import { IDispatchProps, IOwnProps, IStateProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps & IStateProps;

export default class SequenceSegment extends React.PureComponent<CombinedProps> {
  public render() {
    const isActive =
      this.props.attemptId === this.props.activeAttemptId &&
      this.props.segmentId === this.props.activeSegmentId;

    return (
      <div className={styles.zStack}>
        <div className={classes(
          styles.haloContainer,
          isActive ? styles.active : styles.inactive)}>

          <div className={styles.glowingHalo} />
        </div>

        <button
          className={classes(
            styles.large,
            sequenceSegmentsMap.get(this.props.colour))}
          onClick={(e) => this.props.onPositionSelected(
            this.props.attemptId,
            this.props.segmentId)}>
        </button>
      </div>
    );
  }
}
