import { Colour } from "../model/colour";
import IPosition from "../model/position";
import { ActionTypes } from "./action-types";

interface IActionWithoutPayload {
  type: string;
}

interface IAction<T> extends IActionWithoutPayload {
  payload: T;
}

export type ReduxAction =
  IColourSelected |
  IPositionSelected |
  IResetCurrentGame;

export interface IColourSelected extends IAction<Colour> {
  type: ActionTypes.ColourSelected;
}

export interface IPositionSelected extends IAction<IPosition> {
  type: ActionTypes.PositionSelected;
}

export interface IResetCurrentGame extends IActionWithoutPayload {
  type: ActionTypes.ResetCurrentGame;
}
