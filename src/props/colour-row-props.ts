import { Colour } from "../model/colour";
import { List } from "immutable";

export interface ColourRowOwnProps {
  rowId: number;
}

export interface ColourRowStateProps {
  colours: List<Colour>;
}

export type ColourRowProps = ColourRowOwnProps & ColourRowStateProps;
