// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS } from "immutable";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";

describe("AppState", function() {
  it("Should allow maxAttemptsCount to be saved", function() {
    // Arrange
    const newMaxAttemptsCount = 3;
    const appState = new AppState();

    // Act
    appState.maxAttemptsCount = newMaxAttemptsCount;

    // Assert
    expect(appState.maxAttemptsCount).to.equal(newMaxAttemptsCount);
  });

  it("Should allow game state to be saved", function() {
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
});
