import { List } from "immutable";
import { Colour } from "../model/colour";

export interface IDispatchProps {
  onColourSelected: (colour: Colour) => void;
}

export interface IStateProps {
  availableColours: List<Colour>;
}
