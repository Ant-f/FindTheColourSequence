import { Colour } from "../model/colour";
import { INewGameParameters } from "../model/new-game-parameters";
import IPosition from "../model/position";
import { ActionTypes } from "./action-types";

interface IActionWithoutPayload {
  type: string;
}

interface IAction<T> extends IActionWithoutPayload {
  payload: T;
}

export type ReduxAction =
  ICheckSequence |
  IColourSelected |
  IPositionSelected |
  IResetCurrentGame;

export interface ICheckSequence extends IActionWithoutPayload {
  type: ActionTypes.CheckSequence;
}

export interface IColourSelected extends IAction<Colour> {
  type: ActionTypes.ColourSelected;
}

export interface IPositionSelected extends IAction<IPosition> {
  type: ActionTypes.PositionSelected;
}

export interface IResetCurrentGame extends IAction<INewGameParameters> {
  type: ActionTypes.ResetCurrentGame;
}
