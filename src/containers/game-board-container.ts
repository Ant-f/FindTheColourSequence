import { connect } from "react-redux";
import GameBoard from "../components/game-board";
import AppState from "../model/app-state";
import { IOwnProps, IStateProps } from "../props/game-board-props";
import ModalProviderProps from "../props/modal-provider-props";

const mapStateToProps = (state: AppState): IStateProps => {
  return {
    data: state.attemptData,
    isGameLost: state.isGameLost,
    isGameWon: state.isGameWon,
  };
};

export default connect<IStateProps, null, IOwnProps & ModalProviderProps>(
  mapStateToProps,
  null,
)(GameBoard);
