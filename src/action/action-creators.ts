import * as Actions from "../action/actions";
import { Colour } from "../model/colour";
import { ActionTypes } from "./action-types";

export const onColourSelected = (colour: Colour): Actions.IColourSelected => {
  return {
    payload: colour,
    type: ActionTypes.ColourSelected,
  };
};

export const onPositionSelected = (attempt: number, segment: number): Actions.IPositionSelected => {
  return {
    payload: { attempt, segment },
    type: ActionTypes.PositionSelected,
  };
};
