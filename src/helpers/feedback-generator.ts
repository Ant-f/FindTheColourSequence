import { List } from "immutable";
import { Colour } from "../model/colour";

const correctColourAndPosition = Colour.Black;
const correctColourWrongPosition = Colour.White;

interface IDirectMatchOutput {
  matchCount: number;
  unmatchedAttemptElements: List<Colour>;
  unmatchedTargetElements: List<Colour>;
}

/**
 * Check for a match for both colour and position between the sequence to check,
 * and the target sequence. Returns the number of exact matches, and elements
 * from both sequences that did not match.
 * @param sequenceToCheck The sequence to check
 * @param targetSequence The target sequence
 */
const checkDirectMatches = (sequenceToCheck: List<Colour>, targetSequence: List<Colour>): IDirectMatchOutput => {

  let matches = 0;
  const unmatchedAttemptElements: Colour[] = [];
  const unmatchedTargetElements: Colour[] = [];

  for (let i = 0; i < sequenceToCheck.count(); i++) {
    if (sequenceToCheck.get(i) === targetSequence.get(i)) {
      matches++;
    }
    else {
      unmatchedAttemptElements.push(sequenceToCheck.get(i));
      unmatchedTargetElements.push(targetSequence.get(i));
    }
  }

  const output = {
    matchCount: matches,
    unmatchedAttemptElements: List<Colour>(unmatchedAttemptElements),
    unmatchedTargetElements: List<Colour>(unmatchedTargetElements),
  };

  return output;
};

/**
 * Check for a match for colour only, between the sequence to check and the target
 * sequence; use with the already filtered output sequences from checkDirectMatches.
 * Returns the number of matches.
 * @param sequenceToCheck The sequence to check
 * @param targetSequence The target sequence
 */
const checkIndirectMatches = (sequenceToCheck: List<Colour>, targetSequence: List<Colour>): number => {

  let matches = 0;
  const toCheck = sequenceToCheck.toArray();
  const target = targetSequence.toArray();

  for (let i = 0; i < toCheck.length; i++) {
    const firstIndex = target.indexOf(toCheck[i]);
    if (firstIndex > -1) {
      matches++;
      toCheck[i] = undefined;
      target[firstIndex] = undefined;
    }
  }

  return matches;
};

export default (sequenceToCheck: List<Colour>, targetSequence: List<Colour>): List<Colour> => {

  const directMatchOutput = checkDirectMatches(sequenceToCheck, targetSequence);

  const indirectMatches = checkIndirectMatches(
    directMatchOutput.unmatchedAttemptElements,
    directMatchOutput.unmatchedTargetElements);

  const feedback: Colour[] = [];

  for (let i = 0; i < directMatchOutput.matchCount; i++) {
    feedback.push(correctColourAndPosition);
  }

  for (let i = 0; i < indirectMatches; i++) {
    feedback.push(correctColourWrongPosition);
  }

  const nonMatches = sequenceToCheck.count() - feedback.length;

  for (let i = 0; i < nonMatches; i++) {
    feedback.push(Colour.None);
  }

  return List(feedback);
};
