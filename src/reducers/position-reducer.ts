import * as Actions from "../action/actions";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.IPositionSelected): AppState => {
  const updatedState = state
    .setProperties((appState: AppState) => {
      return appState
        .setCurrentAttempt(action.payload.attempt)
        .setCurrentAttemptSegment(action.payload.segment);
    });
  return updatedState;
};
