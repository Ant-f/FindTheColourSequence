import { connect, Dispatch } from "react-redux";
import * as actions from "../action/action-creators";
import { INewGameParameters } from "../action/actions";
import NewGamePanel from "../components/new-game-panel";
import AppState from "../model/app-state";
import { IDispatchProps, IOwnProps } from "../props/new-game-panel-props";

const mapDispatchToProps = (dispatch: Dispatch<AppState>): IDispatchProps => {
  return {
    onResetCurrentGame: (newGameParameters: INewGameParameters) => dispatch(
      actions.onResetCurrentGame(newGameParameters),
    ),
  };
};

export default connect<null, IDispatchProps, IOwnProps>(
  null,
  mapDispatchToProps,
)(NewGamePanel);
