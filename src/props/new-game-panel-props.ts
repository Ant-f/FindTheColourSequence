export interface IDispatchProps {
  onResetCurrentGame: (allowDuplicatesInTargetSequence: boolean) => void;
}

export interface IOwnProps {
  onExitPanel: () => void;
}

type Combined = IDispatchProps & IOwnProps;
export default Combined;
