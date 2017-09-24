import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import GameBoard from "../components/game-board";
import AppState from "../model/app-state";
import { IDispatchProps, IOwnProps, IStateProps } from "../props/game-board-props";
import ModalProviderProps from "../props/modal-provider-props";

const mapStateToProps = (state: AppState): IStateProps => {
  return {
    activeAttemptId: state.currentAttempt,
    data: state.attemptData,
    isGameLost: state.isGameLost,
    isGameWon: state.isGameWon,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>): IDispatchProps => {
  return {
    onCheckSequence: () => dispatch(
      actions.onCheckSequence()),
  };
};

export default connect<IStateProps, IDispatchProps, IOwnProps & ModalProviderProps>(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
