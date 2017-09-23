import { INewGameParameters } from "../model/new-game-parameters";

export interface IDispatchProps {
  onResetCurrentGame: (newGameParameters: INewGameParameters) => void;
}

export interface IOwnProps {
  onExitPanel: () => void;
}

type Combined = IDispatchProps & IOwnProps;
export default Combined;
