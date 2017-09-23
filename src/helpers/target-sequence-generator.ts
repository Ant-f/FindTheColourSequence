import { List } from "immutable";
import { getColours } from "../helpers/colour-helper";
import { Colour } from "../model/colour";

const availableColours = getColours(8);

export default function(length: number, allowDuplicates: boolean): List<Colour> {
  let targetSequence = List<Colour>();

  while (targetSequence.size < length) {
    let index = Math.floor((Math.random() * availableColours.size));

    if (!allowDuplicates) {
      while (targetSequence.contains(availableColours.get(index))) {
        index = (index + 1) % availableColours.size;
      }
    }

    targetSequence = targetSequence.push(availableColours.get(index));
   }

  return targetSequence.toList();
}
