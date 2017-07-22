import { connect, Dispatch } from "react-redux";
import ColourRow from "../components/colour-row";
import AppState from "../model/app-state";
import * as Props from "../props/colour-row-props";

const mapStateToProps = (state: AppState) => {
  return {
    colours: state.colourRows.get(0),
  } as Props.IColourRowStateProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<Props.IColourRowStateProps, any, Props.IColourRowOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ColourRow);
