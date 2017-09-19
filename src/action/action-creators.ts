import * as Actions from "../action/actions";
import { INewGameParameters } from "../action/actions";
import { Colour } from "../model/colour";
import { ActionTypes } from "./action-types";

export const onCheckSequence = (): Actions.ICheckSequence => {
  return {
    type: ActionTypes.CheckSequence,
  };
};

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

export const onResetCurrentGame = (newGameParameters: INewGameParameters): Actions.IResetCurrentGame => {
  return {
    payload: newGameParameters,
    type: ActionTypes.ResetCurrentGame,
  };
};
