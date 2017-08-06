import { List } from "immutable";
import { Colour } from "../model/colour";

export interface IOwnProps {
  colours: Colour[];
  attemptId: number;
}
