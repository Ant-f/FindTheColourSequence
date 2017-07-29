import { Action } from "redux-actions";
import { Colour } from "../../src/model/colour";

export interface IColourSelected extends Action<Colour> {
  colour: Colour;
  type: string;
}
