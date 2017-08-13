import { Map } from "immutable";
import * as React from "react";
import * as buttonStyles from "../../stylesheets/sass/buttons.scss";
import { Colour } from "../model/colour";
import { IDispatchProps, IOwnProps } from "../props/sequence-segment-props";

type CombinedProps = IDispatchProps & IOwnProps;

const colourClassMap = Map<Colour, string>({
  [Colour.Black]: buttonStyles.black,
  [Colour.Blue]: buttonStyles.blue,
  [Colour.Green]: buttonStyles.green,
  [Colour.None]: buttonStyles.none,
  [Colour.Orange]: buttonStyles.orange,
  [Colour.Purple]: buttonStyles.purple,
  [Colour.Red]: buttonStyles.red,
  [Colour.White]: buttonStyles.white,
  [Colour.Yellow]: buttonStyles.yellow,
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
