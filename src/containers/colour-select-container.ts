import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import ColourSelect from "../components/colour-select";
import { getColours } from "../helpers/colour-helper";
import AppState from "../model/app-state";
import { Colour } from "../model/colour";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

const mapStateToProps = (state: AppState): IStateProps => {
  return {
    availableColours: getColours(state.availableColourCount),
    isGameOver: state.isGameLost || state.isGameWon,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>): IDispatchProps => {
  return {
    onColourSelected: (colour: Colour) => dispatch(
      actions.onColourSelected(colour)),
  };
};

export default connect<IStateProps, IDispatchProps, null>(
  mapStateToProps,
  mapDispatchToProps,
)(ColourSelect);
