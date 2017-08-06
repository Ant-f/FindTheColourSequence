import { List } from "immutable";
import { Colour } from "../model/colour";

export default interface ISequenceAttemptData {
  feedback: Colour[];
  input: Colour[];
}
