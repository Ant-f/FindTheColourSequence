import { List } from "immutable";
import { Colour } from "../model/colour";

export interface IOwnProps {
  colours: List<Colour>;
  attemptId: number;
}
