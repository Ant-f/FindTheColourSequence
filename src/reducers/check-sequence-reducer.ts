import * as Actions from "../action/actions";
import generateFeedback from "../helpers/feedback-generator";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.ICheckSequence): AppState => {
  const originalAttemptIndex = state.currentAttempt;

  const feedback = generateFeedback(
    state.getAttemptDataInput(originalAttemptIndex),
    state.targetSequence);

  const updatedState = state
    .setProperties((appState: AppState): AppState => {
      return appState
        .setAttemptDataFeedback(originalAttemptIndex, feedback)
        .setCurrentAttemptSegment(0)
        .setCurrentAttempt(originalAttemptIndex + 1);
  });

  return updatedState;
};
