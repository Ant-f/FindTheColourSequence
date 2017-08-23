import ISequenceAttemptData from "../model/sequence-attempt-data";

export default interface IStateProps {
  data: ISequenceAttemptData[];
  isGameLost: boolean;
  isGameWon: boolean;
}
