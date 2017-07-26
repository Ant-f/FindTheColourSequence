import { Action, handleActions } from "redux-actions";
import * as actionTypes from "../action/action-types";
import { IColourSelected } from "../action/actions";
import AppState from "../model/app-state";

const reducer = handleActions({
  [actionTypes.ColourSelected](state: AppState, action: Action<IColourSelected>) {
    return state;
  },
}, new AppState());

export default reducer;
