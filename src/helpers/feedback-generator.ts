import { List } from "immutable";
import { Colour } from "../model/colour";

const correctColourAndPosition = Colour.Black;
const correctColourWrongPosition = Colour.White;

/**
 * Return an appropriate colour indicating match against target sequence
 * @param colour Colour from sequence to check
 * @param index Index of colour from sequence to check
 * @param targetSequence Target colour sequence to match against
 */
const checkColour = (colour: Colour, index: number, targetSequence: List<Colour>): Colour => {
  if (targetSequence.get(index) === colour) {
    return correctColourAndPosition;
  }
  else if (targetSequence.some((sequenceColour) => colour === sequenceColour)) {
    return correctColourWrongPosition;
  }
  return Colour.None;
};

export default (sequenceToCheck: List<Colour>, targetSequence: List<Colour>): List<Colour> => {
  const feedback = sequenceToCheck
    .map((colour, index) => checkColour(colour, index, targetSequence))
    .toList();

  return feedback;
};
