import { List } from "immutable";
import { getColours } from "../helpers/colour-helper";
import { Colour } from "../model/colour";
import { INewGameParameters } from "../model/new-game-parameters";

export default function(parameters: INewGameParameters): List<Colour> {
  let targetSequence = List<Colour>();

  const availableColours = getColours(parameters.availableColourCount);

  while (targetSequence.size < parameters.colourSequenceLength) {
    let index = Math.floor((Math.random() * availableColours.size));

    if (!parameters.allowDuplicatesInTargetSequence) {
      while (targetSequence.contains(availableColours.get(index))) {
        index = (index + 1) % availableColours.size;
      }
    }

    targetSequence = targetSequence.push(availableColours.get(index));
   }

  return targetSequence.toList();
}
