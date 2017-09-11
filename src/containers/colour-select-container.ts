import { List, Map } from "immutable";
import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import ColourSelect from "../components/colour-select";
import AppState from "../model/app-state";
import { Colour, colourOrder } from "../model/colour";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

const compareColour = (c1: Colour, c2: Colour): number => {
  const value = colourOrder[c1] - colourOrder[c2];
  return value;
};

const mapStateToProps = (state: AppState): IStateProps => {
  const colours = Map<Colour, string>(Colour)
    .valueSeq()
    .sort(compareColour)
    .toList() as List<Colour>;

  return {
    availableColours: colours,
    isGameOver: state.isGameLost || state.isGameWon,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
    onColourSelected: (colour: Colour) => dispatch(
      actions.onColourSelected(colour)),
  };
};

export default connect<IStateProps, IDispatchProps, null>(
  mapStateToProps,
  mapDispatchToProps,
)(ColourSelect);
