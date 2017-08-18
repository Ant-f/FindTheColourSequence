import * as Actions from "../action/actions";
import generateFeedback from "../helpers/feedback-generator";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.IColourSelected): AppState => {

  const provisionalNextSegment = state.currentAttemptSegment + 1;
  const isAttemptComplete = provisionalNextSegment >= state.sequenceColourCount;

  const nextSegment = isAttemptComplete
    ? 0
    : provisionalNextSegment;

  const updatedState = state
    .setProperties((appState: AppState): AppState => {
      const originalAttemptIndex = state.currentAttempt;

      const baseUpdate = appState
        .setColourAtCurrentPosition(action.payload)
        .setCurrentAttemptSegment(nextSegment);

      if (isAttemptComplete) {
        const feedback = generateFeedback(
          baseUpdate.getAttemptDataInput(originalAttemptIndex),
          baseUpdate.targetSequence);

        return baseUpdate
          .setCurrentAttempt(originalAttemptIndex + 1)
          .setAttemptDataFeedback(originalAttemptIndex, feedback);
      }
      else {
        return baseUpdate;
      }
    });

  return updatedState;
};
