export interface IDispatchProps {
  onResetCurrentGame: () => void;
}

export interface IOwnProps {
  onExitPanel: () => void;
}

type Combined = IDispatchProps & IOwnProps;
export default Combined;
