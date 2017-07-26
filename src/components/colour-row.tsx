import * as React from "react";
import { IOwnProps, IStateProps } from "../props/colour-row-props";

type CombinedProps = IOwnProps & IStateProps;

export default class ColourRow extends React.Component<CombinedProps> {
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
