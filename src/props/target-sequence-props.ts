import { Colour } from "../model/colour";

export interface IStateProps {
  isGameOver: boolean;
  targetSequence: Colour[];
}
