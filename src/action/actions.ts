import { Colour } from "../model/colour";
import IPosition from "../model/position";
import { ActionTypes } from "./action-types";

export interface INewGameParameters {
  allowDuplicatesInTargetSequence: boolean;
  colourSequenceLength: number;
}

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
