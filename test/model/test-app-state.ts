// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS } from "immutable";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("AppState", function() {
  it("allows maxAttemptsCount to be set", function() {

    // Arrange

    const newValue = 3;
    const state = new AppState();

    // Act

    const updatedState = state.setMaxAttemptsCount(newValue);

    // Assert

    expect(updatedState.maxAttemptsCount).to.equal(newValue);
  });

  it("allows sequenceColourCount to be set", function() {

    // Arrange

    const newValue = 3;
    const state = new AppState();

    // Act

    const updatedState = state.setSequenceColourCount(newValue);

    // Assert

    expect(updatedState.sequenceColourCount).to.equal(newValue);
  });

  it("allows game state to be set", function() {

    // Arrange

    const newGameState = fromJS([
      [Colour.None],
    ]);

    const state = new AppState();

    // Act

    const updatedState = state.setGameState(newGameState);

    // Assert

    expect(updatedState.gameState).to.equal(newGameState);
  });

  it("allows currentAttempt to be set", function() {

    // Arrange

    const newValue = 3;
    const state = new AppState();

    // Act

    const updatedState = state.setCurrentAttempt(newValue);

    // Assert

    expect(updatedState.currentAttempt).to.equal(newValue);
  });

  it("allows currentAttemptSegment to be set", function() {

    // Arrange

    const newValue = 3;
    const state = new AppState();

    // Act

    const updatedState = state.setCurrentAttemptSegment(newValue);

    // Assert

    expect(updatedState.currentAttemptSegment).to.equal(newValue);
  });

  it("allows multiple properties to be set as a single operation", function() {

    // Arrange

    const newCurrentAttempt = 7;
    const newCurrentAttemptSegment = 3;
    const state = new AppState();

    // Act

    const updatedState = state.setProperties(
      (appState: AppState): AppState => {
        return appState
          .setCurrentAttempt(newCurrentAttempt)
          .setCurrentAttemptSegment(newCurrentAttemptSegment);
      });

    // Assert

    expect(updatedState.currentAttempt).to.equal(newCurrentAttempt);
    expect(updatedState.currentAttemptSegment).to.equal(newCurrentAttemptSegment);
  });
});
