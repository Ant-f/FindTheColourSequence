import * as React from "react";
import { sequenceSegmentsMap } from "../../stylesheets/classname-maps";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as styles from "../../stylesheets/sass/sequence-segments.scss";
import classes from "../helpers/classes";
import { Colour } from "../model/colour";
import { IDispatchProps, IOwnProps, IStateProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps & IStateProps;

const getClassNames = (colour: Colour, canSelect: boolean): string => {
  const classNames = classes(
    canSelect ? buttons.hoverHalo : null,
    styles.large,
    sequenceSegmentsMap.get(colour));

  return classNames;
};

export default class SequenceSegment extends React.PureComponent<CombinedProps> {
  public render() {
    const isActive =
      this.props.attemptId === this.props.activeAttemptId &&
      this.props.segmentId === this.props.activeSegmentId;

    const canSelect =
      this.props.attemptId === this.props.activeAttemptId &&
      !this.props.isGameOver;

    return (
      <div className={styles.zStack}>
        <div className={
          this.props.colour === Colour.None
            ? null
            : classes(styles.large, styles.segmentShadow)} />

        <div className={classes(
          styles.haloContainer,
          isActive && !this.props.isGameOver ? styles.visible : styles.invisible)}>

          <div className={styles.pulsingHalo} />
        </div>

        <button
          className={getClassNames(this.props.colour, canSelect)}
          disabled={!canSelect}
          onClick={(e) => this.props.onPositionSelected(
            this.props.attemptId,
            this.props.segmentId)}>
        </button>
      </div>
    );
  }
}
