export interface INewGameParameters {
  allowDuplicatesInTargetSequence: boolean;
  colourSequenceLength: number;
}

export const defaultParameters: INewGameParameters = {
  allowDuplicatesInTargetSequence: false,
  colourSequenceLength: 4,
};
