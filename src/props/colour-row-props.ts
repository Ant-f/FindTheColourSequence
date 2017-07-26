import { List } from "immutable";
import { Colour } from "../model/colour";

export interface IOwnProps {
  rowId: number;
}

export interface IStateProps {
  colours: List<Colour>;
}
