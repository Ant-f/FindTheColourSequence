import * as React from "react";
import { IOwnProps } from "../props/sequence-attempt-props";
import SequenceSegment from "./sequence-segment";

type CombinedProps = IOwnProps;

export default class SequenceAttempt extends React.Component<CombinedProps> {
  public render() {
    return (
      <div>
        {
          this.props.colours.map((colour, key) =>
            <SequenceSegment colour={colour} id={key} key={key}/>,
          )
        }
      </div>);
  }
}
