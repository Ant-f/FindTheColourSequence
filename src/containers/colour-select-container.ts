import { Map } from "immutable";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../action/action-creators";
import ColourSelect from "../components/colour-select";
import AppState from "../model/app-state";
import { Colour } from "../model/colour";
import { IDispatchProps, IStateProps } from "../props/colour-select-props";

const mapStateToProps = (state: AppState) => {
  const colours = Map<Colour, string>(Colour)
    .filter((colour) => colour !== Colour.None);

  return {
    availableColours: colours.toList(),
  } as IStateProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return bindActionCreators({...actions}, dispatch);
};

export default connect<IStateProps, IDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ColourSelect);
