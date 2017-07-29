import { Action, handleActions } from "redux-actions";
import { Colour } from "../../src/model/colour";
import * as actionTypes from "../action/action-types";
import AppState from "../model/app-state";

const reducer = handleActions({
  [actionTypes.ColourSelected](state: AppState, action: Action<Colour>) {

    let nextSegment = state.currentAttemptSegment + 1;
    let attempt = state.currentAttempt;

    if (nextSegment >= state.sequenceColourCount) {
      nextSegment = 0;
      attempt++;
    }

    state.currentAttempt = attempt;
    state.currentAttemptSegment = nextSegment;

    return state;
  },
}, new AppState());

export default reducer;
