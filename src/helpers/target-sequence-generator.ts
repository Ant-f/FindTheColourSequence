import { List, Map, Set } from "immutable";
import { Colour } from "../model/colour";

const availableColours = Map<Colour, Colour>(Colour)
  .filter((colour) => colour !== Colour.None)
  .toList();

export default function(length: number): List<Colour> {
  let targetSequence = Set<Colour>();

  while (targetSequence.count() < length) {
    let index = Math.floor((Math.random() * availableColours.count()) + 1);

    while (targetSequence.contains(availableColours.get(index))) {
      index = (index + 1) % availableColours.count();
    }

    targetSequence = targetSequence.add(availableColours.get(index));
   }

  return targetSequence.toList();
}
