import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import SequenceSegment from "../components/sequence-segment";
import AppState from "../model/app-state";
import { IDispatchProps, IOwnProps, IStateProps } from "../props/sequence-segment-props";

const mapDispatchToProps = (dispatch: Dispatch<AppState>): IDispatchProps => {
  return {
    onPositionSelected: (attempt, segment) => dispatch(
      actions.onPositionSelected(attempt, segment)),
  };
};

const mapStateToProps = (state: AppState): IStateProps => {
  return {
    activeAttemptId: state.currentAttempt,
    activeSegmentId: state.currentAttemptSegment,
    isGameOver: state.isGameLost || state.isGameWon,
  };
};

export default connect<IStateProps, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SequenceSegment);
