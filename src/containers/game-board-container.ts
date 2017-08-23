import { connect } from "react-redux";
import GameBoard from "../components/game-board";
import AppState from "../model/app-state";
import GameBoardProps from "../props/game-board-props";
import ModalProviderProps from "../props/modal-provider-props";

const mapStateToProps = (state: AppState) => {
  return {
    data: state.attemptData,
    isGameLost: state.isGameLost,
    isGameWon: state.isGameWon,
  } as GameBoardProps;
};

export default connect<GameBoardProps, null, ModalProviderProps>(
  mapStateToProps,
  null,
)(GameBoard);
