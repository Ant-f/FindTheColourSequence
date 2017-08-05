import * as Actions from "../action/actions";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.IColourSelected): AppState => {

  let nextSegment = state.currentAttemptSegment + 1;
  let attempt = state.currentAttempt;

  if (nextSegment >= state.sequenceColourCount) {
    nextSegment = 0;
    attempt--;
  }

  const updatedState = state
    .setProperties((appState: AppState): AppState => {
      return appState
        .setColourAtCurrentPosition(action.payload)
        .setCurrentAttempt(attempt)
        .setCurrentAttemptSegment(nextSegment);
    });

  return updatedState;
};
