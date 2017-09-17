import ISequenceAttemptData from "../model/sequence-attempt-data";

export interface IDispatchProps {
  onCheckSequence: () => void;
}

export interface IStateProps {
  data: ISequenceAttemptData[];
  isGameLost: boolean;
  isGameWon: boolean;
}

export interface IOwnProps {
  onHowToPlay: () => void;
  onNewGamePrompt: () => void;
}

type Combined = IDispatchProps & IStateProps & IOwnProps;
export default Combined;
