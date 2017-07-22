import { List } from "immutable";
import { Colour } from "../model/colour";

export interface IColourRowOwnProps {
  rowId: number;
}

export interface IColourRowStateProps {
  colours: List<Colour>;
}

export type ColourRowProps = IColourRowOwnProps & IColourRowStateProps;
