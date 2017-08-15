import { Map } from "immutable";
import * as React from "react";
import * as styles from "../../stylesheets/sass/colour-select.scss";
import { Colour } from "../model/colour";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

type CombinedProps = IDispatchProps & IStateProps;

const colourWrapperClassMap = Map<Colour, string>({
  [Colour.Black]: styles.blackWrapper,
  [Colour.Blue]: styles.blueWrapper,
  [Colour.Green]: styles.greenWrapper,
  [Colour.Orange]: styles.orangeWrapper,
  [Colour.Purple]: styles.purpleWrapper,
  [Colour.Red]: styles.redWrapper,
  [Colour.White]: styles.whiteWrapper,
  [Colour.Yellow]: styles.yellowWrapper,
});

const colourButtonClassMap = Map<Colour, string>({
  [Colour.Black]: styles.blackButton,
  [Colour.Blue]: styles.blueButton,
  [Colour.Green]: styles.greenButton,
  [Colour.Orange]: styles.orangeButton,
  [Colour.Purple]: styles.purpleButton,
  [Colour.Red]: styles.redButton,
  [Colour.White]: styles.whiteButton,
  [Colour.Yellow]: styles.yellowButton,
});

export default class ColourSelect extends React.Component<CombinedProps> {
  public render() {
    return (
      <div>
        {
          this.props.availableColours.map((colour, key) =>
            <div
              className={colourWrapperClassMap.get(colour)}
              key={key}>
              <button
                className={colourButtonClassMap.get(colour)}
                onClick={(e) => this.props.onColourSelected(colour)}>
              </button>
            </div>,
          )
        }
      </div>);
  }
}
