import { Map } from "immutable";
import { ActionTypes } from "../action/action-types";
import * as Actions from "../action/actions";
import AppState from "../model/app-state";
import colourReducer from "./colour-reducer";
import defaultReducer from "./default-reducer";
import positionReducer from "./position-reducer";

const reducers = Map<ActionTypes, (s: AppState, a: Actions.ReduxAction) => AppState>({
  [ActionTypes.ColourSelected]: colourReducer,
  [ActionTypes.PositionSelected]: positionReducer,
});

export default (state: AppState = new AppState(), action: Actions.ReduxAction) => {
  const reducer = reducers.get(action.type, defaultReducer);
  const updatedState = reducer(state, action);
  return updatedState;
};
