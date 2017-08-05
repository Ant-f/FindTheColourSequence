import { ActionTypes } from "../action/action-types";
import * as Actions from "../action/actions";
import AppState from "../model/app-state";

const colourReducer = (state: AppState, action: Actions.IColourSelected): AppState => {

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

const positionReducer = (state: AppState, action: Actions.IPositionSelected): AppState => {
  const updatedState = state
    .setProperties((appState: AppState) => {
      return appState
        .setCurrentAttempt(action.payload.attempt)
        .setCurrentAttemptSegment(action.payload.segment);
    });
  return updatedState;
};

type Action =
  Actions.IColourSelected |
  Actions.IPositionSelected;

export default (state: AppState = new AppState(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ColourSelected: {
      return colourReducer(state, action as Actions.IColourSelected);
    }

    case ActionTypes.PositionSelected: {
      return positionReducer(state, action as Actions.IPositionSelected);
    }
  }
};
