import { Map } from "immutable";
import * as React from "react";
import * as styles from "../../stylesheets/sass/sequence-segments.scss";
import { Colour } from "../model/colour";
import { IDispatchProps, IOwnProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps;

const colourClassMap = Map<Colour, string>({
  [Colour.Black]: styles.black,
  [Colour.Blue]: styles.blue,
  [Colour.Green]: styles.green,
  [Colour.None]: styles.none,
  [Colour.Orange]: styles.orange,
  [Colour.Purple]: styles.purple,
  [Colour.Red]: styles.red,
  [Colour.White]: styles.white,
  [Colour.Yellow]: styles.yellow,
});

export default class SequenceSegment extends React.PureComponent<CombinedProps> {
  public render() {
    return (
      <button
        className={colourClassMap.get(this.props.colour)}
        onClick={(e) => this.props.onPositionSelected(
          this.props.attemptId,
          this.props.segmentId)}>
      </button>
    );
  }
}
