import { Map } from "immutable";
import { ActionTypes } from "../action/action-types";
import * as Actions from "../action/actions";
import AppState from "../model/app-state";
import colourReducer from "./colour-reducer";
import defaultReducer from "./default-reducer";
import positionReducer from "./position-reducer";

type Action =
  Actions.IColourSelected |
  Actions.IPositionSelected;

const reducers = Map<ActionTypes, (s: AppState, a: Action) => AppState>({
  [ActionTypes.ColourSelected]: colourReducer,
  [ActionTypes.PositionSelected]: positionReducer,
});

export default (state: AppState = new AppState(), action: Action) => {
  const updatedState = reducers.get(action.type, defaultReducer)(state, action);
  return updatedState;
};
