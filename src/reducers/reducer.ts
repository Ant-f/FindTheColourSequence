import { Map } from "immutable";
import { ActionTypes } from "../action/action-types";
import * as Actions from "../action/actions";
import AppState from "../model/app-state";
import checkSequenceReducer from "./check-sequence-reducer";
import colourReducer from "./colour-reducer";
import defaultReducer from "./default-reducer";
import positionReducer from "./position-reducer";
import resetGameReducer from "./reset-game-reducer";

const reducers = Map<ActionTypes, (s: AppState, a: Actions.ReduxAction) => AppState>({
  [ActionTypes.CheckSequence]: checkSequenceReducer,
  [ActionTypes.ColourSelected]: colourReducer,
  [ActionTypes.PositionSelected]: positionReducer,
  [ActionTypes.ResetCurrentGame]: resetGameReducer,
});

export default (state: AppState = new AppState(), action: Actions.ReduxAction) => {
  const reducer = reducers.get(action.type, defaultReducer);
  const updatedState = reducer(state, action);
  return updatedState;
};
