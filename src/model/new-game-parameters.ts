export interface INewGameParameters {
  allowDuplicatesInTargetSequence: boolean;
  availableColourCount: number;
  colourSequenceLength: number;
}

export const defaultParameters: INewGameParameters = {
  allowDuplicatesInTargetSequence: false,
  availableColourCount: 8,
  colourSequenceLength: 4,
};
