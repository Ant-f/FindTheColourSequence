import { Colour } from "../model/colour";
import IPosition from "../model/position";
import { ActionTypes } from "./action-types";

interface IAction<T> {
  payload: T;
  type: string;
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

export interface IResetCurrentGame extends IAction<boolean> {
  type: ActionTypes.ResetCurrentGame;
}
