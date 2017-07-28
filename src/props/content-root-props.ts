import { List } from "immutable";
import { Colour } from "../model/colour";

export default interface IContentRootStateProps {
  gameState: List<List<Colour>>;
}
