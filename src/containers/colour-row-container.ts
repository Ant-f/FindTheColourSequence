import * as Props from "../props/colour-row-props";
import AppState from "../model/app-state";
import ColourRow from "../components/colour-row";
import { connect, Dispatch } from "react-redux";

const mapStateToProps = (state: AppState) => {
  return <Props.ColourRowStateProps> {
    colours: state.colourRows.get(0)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return {
  };
};

export default connect<Props.ColourRowStateProps, any, Props.ColourRowOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(ColourRow);
