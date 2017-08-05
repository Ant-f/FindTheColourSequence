import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import SequenceSegment from "../components/sequence-segment";
import AppState from "../model/app-state";
import { IDispatchProps, IOwnProps } from "../props/sequence-segment-props";

const mapDispatchToProps = (dispatch: Dispatch<AppState>): IDispatchProps => {
  return {
    onPositionSelected: (attempt, segment) => dispatch(
      actions.onPositionSelected(attempt, segment)),
  };
};

export default connect<null, IDispatchProps, IOwnProps>(
  null,
  mapDispatchToProps,
)(SequenceSegment);
