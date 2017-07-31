// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { fromJS } from "immutable";
import * as actionCreators from "../../src/action/action-creators";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";
import reducer from "../../src/reducers/reducer";

describe("Reducer", function() {
  describe("actionTypes.ColourSelected", function() {
    it("increments currentAttemptSegment if less than sequence colour count", function() {

      // Arrange

      const appState = new AppState();
      appState.currentAttempt = 1;
      appState.currentAttemptSegment = 2;

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      reducer(appState, action);

      // Assert

      expect(appState.currentAttempt).to.equal(1);
      expect(appState.currentAttemptSegment).to.equal(3);
    });

    it("resets currentAttemptSegment if equal to sequence colour count", function() {

      // Arrange

      const appState = new AppState();
      appState.currentAttempt = 1;
      appState.currentAttemptSegment = 3;

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      reducer(appState, action);

      // Assert

      expect(appState.currentAttempt).to.equal(2);
      expect(appState.currentAttemptSegment).to.equal(0);
    });

    it("sets selected colour at current position", function() {

      // Arrange

      const selectedColour = Colour.Yellow;
      const initialAttempt = 5;
      const initialAttemptSegment = 2;

      const appState = new AppState();
      appState.currentAttempt = initialAttempt;
      appState.currentAttemptSegment = initialAttemptSegment;

      const action = actionCreators.onColourSelected(selectedColour);

      // Act

      reducer(appState, action);

      // Assert

      const colourAtInitialPosition = appState.gameState
        .get(initialAttempt)
        .get(initialAttemptSegment);

      expect(colourAtInitialPosition).to.equal(selectedColour);
    });
  });
});
