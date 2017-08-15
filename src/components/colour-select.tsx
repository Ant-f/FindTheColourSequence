import * as React from "react";
import {colourSelectButtonMap, colourSelectWrapperMap} from "../../stylesheets/classname-maps";
import * as styles from "../../stylesheets/sass/colour-select.scss";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

type CombinedProps = IDispatchProps & IStateProps;

export default class ColourSelect extends React.Component<CombinedProps> {
  public render() {
    return (
      <div className={styles.colourPanel}>
        {
          this.props.availableColours.map((colour, key) =>
            <div
              className={colourSelectWrapperMap.get(colour)}
              key={key}>
              <button
                className={colourSelectButtonMap.get(colour)}
                onClick={(e) => this.props.onColourSelected(colour)}>
              </button>
            </div>,
          )
        }
      </div>);
  }
}
