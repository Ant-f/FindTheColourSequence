import * as React from "react";
import { ColourRowProps } from "../props/colour-row-props";

export default class ColourRow extends React.Component<ColourRowProps> {
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
