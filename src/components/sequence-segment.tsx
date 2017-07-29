import * as React from "react";
import { IOwnProps } from "../props/sequence-segment-props";

export default class SequenceSegment extends React.PureComponent<IOwnProps> {
  public render() {
    return (
      <button>
        {
          this.props.colour
        }
      </button>
    );
  }
}
