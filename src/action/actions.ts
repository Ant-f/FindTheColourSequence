import { Action } from "redux-actions";

export interface IColourSelected extends Action<string> {
  colourValue: string;
  type: string;
}
