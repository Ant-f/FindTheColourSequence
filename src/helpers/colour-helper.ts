import { List } from "immutable";
import { Colour } from "../model/colour";

const allColours: List<Colour> = List([
  Colour.Red,
  Colour.Orange,
  Colour.Yellow,
  Colour.DarkGreen,
  Colour.Green,
  Colour.Blue,
  Colour.LightBlue,
  Colour.Purple,
  Colour.White,
  Colour.Black,
]);

export const getColours = (colourCount: number): List<Colour> => {
  return allColours.take(colourCount).toList();
};
