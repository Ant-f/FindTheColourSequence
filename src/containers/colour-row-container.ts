import { connect, Dispatch } from "react-redux";
import ColourRow from "../components/colour-row";
import AppState from "../model/app-state";
import { IOwnProps, IStateProps } from "../props/colour-row-props";

const mapStateToProps = (state: AppState) => {
  return {
    colours: state.colourRows.get(0),
  } as IStateProps;
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<IStateProps, any, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ColourRow);
