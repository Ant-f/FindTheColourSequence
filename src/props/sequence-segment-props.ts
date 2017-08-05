import { Colour } from "../model/colour";

export interface IDispatchProps {
  onPositionSelected: (attempt: number, segment: number) => void;
}

export interface IOwnProps {
  attemptId: number;
  colour: Colour;
  segmentId: number;
}
