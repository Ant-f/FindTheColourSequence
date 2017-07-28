import * as React from "react";
import { IOwnProps } from "../props/sequence-attempt-props";

type CombinedProps = IOwnProps;

export default class SequenceAttempt extends React.Component<CombinedProps> {
  public render() {
    return (
      <div>
        {
          this.props.colours.map((colour, key) =>
            <button key={key}>{colour}</button>,
          )
        }
      </div>);
  }
}
