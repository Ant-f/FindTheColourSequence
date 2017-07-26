import * as React from "react";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

type CombinedProps = IDispatchProps & IStateProps;

export default class ColourRow extends React.Component<CombinedProps> {
  public render() {
    return (
      <div>
        {
          this.props.availableColours.map((colour, key) =>
            <button key={key}
                    onClick={(e) => this.props.onColourSelected(colour)}>
              {colour}
            </button>,
          )
        }
      </div>);
  }
}
