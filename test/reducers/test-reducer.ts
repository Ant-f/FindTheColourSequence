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

      const state = new AppState()
        .setCurrentAttempt(1)
        .setCurrentAttemptSegment(2);

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(1);
      expect(updatedState.currentAttemptSegment).to.equal(3);
    });

    it("resets currentAttemptSegment if equal to sequence colour count", function() {

      // Arrange

      const state = new AppState()
        .setCurrentAttempt(1)
        .setCurrentAttemptSegment(3);

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(2);
      expect(updatedState.currentAttemptSegment).to.equal(0);
    });

    it("sets selected colour at current position", function() {

      // Arrange

      const selectedColour = Colour.Yellow;
      const initialAttempt = 5;
      const initialAttemptSegment = 2;

      const state = new AppState()
        .setCurrentAttempt(initialAttempt)
        .setCurrentAttemptSegment(initialAttemptSegment);

      const action = actionCreators.onColourSelected(selectedColour);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      const colourAtInitialPosition = updatedState.gameState
        .get(initialAttempt)
        .get(initialAttemptSegment);

      expect(colourAtInitialPosition).to.equal(selectedColour);
    });
  });
});
