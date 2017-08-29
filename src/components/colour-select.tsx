import * as React from "react";
import {colourSelectInnerMap, colourSelectWrapperMap} from "../../stylesheets/classname-maps";
import * as buttons from "../../stylesheets/sass/buttons.scss";
import * as styles from "../../stylesheets/sass/colour-select.scss";
import classes from "../helpers/classes";
import { Colour } from "../model/colour";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

type CombinedProps = IDispatchProps & IStateProps;

const getClassNames = (colour: Colour, isGameOver: boolean): string => {
  const classNames = classes(
    isGameOver ? null : buttons.hoverHalo,
    colourSelectWrapperMap.get(colour));

  return classNames;
};

export default class ColourSelect extends React.Component<CombinedProps> {
  public render() {
    return (
      <div className={styles.colourPanel}>
        {
          this.props.availableColours.map((colour, key) =>
            <button
              className={getClassNames(colour, this.props.isGameOver)}
              disabled={this.props.isGameOver}
              key={key}
              onClick={(e) => this.props.onColourSelected(colour)}>
              <div
                className={colourSelectInnerMap.get(colour)}>
              </div>
            </button>,
          )
        }
      </div>);
  }
}
