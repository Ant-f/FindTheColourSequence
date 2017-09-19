import { INewGameParameters } from "../action/actions";

export interface IDispatchProps {
  onResetCurrentGame: (newGameParameters: INewGameParameters) => void;
}

export interface IOwnProps {
  onExitPanel: () => void;
}

type Combined = IDispatchProps & IOwnProps;
export default Combined;
