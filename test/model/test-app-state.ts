// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS } from "immutable";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("AppState", function() {
  it("allows maxAttemptsCount to be saved", function() {

    // Arrange

    const newValue = 3;
    const appState = new AppState();

    // Act

    appState.maxAttemptsCount = newValue;

    // Assert

    expect(appState.maxAttemptsCount).to.equal(newValue);
  });

  it("allows sequenceColourCount to be saved", function() {

    // Arrange

    const newValue = 3;
    const appState = new AppState();

    // Act

    appState.sequenceColourCount = newValue;

    // Assert

    expect(appState.sequenceColourCount).to.equal(newValue);
  });

  it("allows game state to be saved", function() {

    // Arrange

    const newGameState = fromJS([
      [ Colour.None ],
    ]);

    const appState = new AppState();

    // Act

    appState.gameState = newGameState;

    // Assert

    expect(appState.gameState).to.equal(newGameState);
  });

  it("allows currentAttempt to be saved", function() {

    // Arrange

    const newValue = 3;
    const appState = new AppState();

    // Act

    appState.currentAttempt = newValue;

    // Assert

    expect(appState.currentAttempt).to.equal(newValue);
  });

  it("allows currentAttemptSegment to be saved", function() {

    // Arrange

    const newValue = 3;
    const appState = new AppState();

    // Act

    appState.currentAttemptSegment = newValue;

    // Assert

    expect(appState.currentAttemptSegment).to.equal(newValue);
  });
});
