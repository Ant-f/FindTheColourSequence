import { connect } from "react-redux";
import TargetSequence from "../components/target-sequence";
import AppState from "../model/app-state";
import { IStateProps } from "../props/target-sequence-props";

const mapStateToProps = (state: AppState): IStateProps => {
  return {
    isGameOver: state.isGameLost || state.isGameWon,
    targetSequence: state.targetSequence.toArray(),
  };
};

export default connect<IStateProps, null, null>(
  mapStateToProps,
  null,
)(TargetSequence);
