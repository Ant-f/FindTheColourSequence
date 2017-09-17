import * as Actions from "../action/actions";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.IColourSelected): AppState => {

  const provisionalNextSegment = state.currentAttemptSegment + 1;
  const resetSegmentIndex = provisionalNextSegment >= state.sequenceColourCount;

  const nextSegment = resetSegmentIndex
    ? 0
    : provisionalNextSegment;

  const updatedState = state
    .setProperties((appState: AppState): AppState => {

      return appState
        .setColourAtCurrentPosition(action.payload)
        .setCurrentAttemptSegment(nextSegment);
    });

  return updatedState;
};
