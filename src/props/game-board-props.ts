import ISequenceAttemptData from "../model/sequence-attempt-data";

export interface IStateProps {
  data: ISequenceAttemptData[];
  isGameLost: boolean;
  isGameWon: boolean;
}

export interface IOwnProps {
  onNewGamePrompt: () => void;
}
