// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { List } from "immutable";
import * as TypeMoq from "typemoq";
import * as actionCreators from "../../src/action/action-creators";
import { ReduxAction } from "../../src/action/actions";
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
        .setCurrentAttempt(4)
        .setCurrentAttemptSegment(3);

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(5);
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

      const colourAtInitialPosition = updatedState
        .attemptData[initialAttempt]
        .input[initialAttemptSegment];

      expect(colourAtInitialPosition).to.equal(selectedColour);
    });

    it("assigns feedback if currentAttemptSegment is equal to sequence colour count", function() {

      // Arrange

      const attempt = 2;
      const selectedColour = Colour.Black;
      const targetSequence = List<Colour>([Colour.Blue, Colour.Green, Colour.Red]);

      const colourReducerModule = require("inject-loader!../../src/reducers/colour-reducer");

      const feedbackGeneratorMock:
        TypeMoq.IMock<(s: List<Colour>, t: List<Colour>) => List<Colour>>
        = TypeMoq.Mock.ofInstance(
          (s: List<Colour>, t: List<Colour>) => List<Colour>());

      const feedback = List<Colour>([Colour.Black, Colour.White, Colour.None]);

      feedbackGeneratorMock
        .setup((fg) => fg(
          TypeMoq.It.is((l: List<Colour>) => l.contains(selectedColour)),
          TypeMoq.It.is((l: List<Colour>) => l.equals(targetSequence))))
        .returns(() => feedback);

      const reducerWithInjection = colourReducerModule({
        "../helpers/feedback-generator": {
          default: feedbackGeneratorMock.object,
        },
      }).default as (state: AppState, action: ReduxAction) => AppState;

      const state = new AppState()
        .setCurrentAttempt(attempt)
        .setCurrentAttemptSegment(3)
        .setTargetSequence(targetSequence);

      const action = actionCreators.onColourSelected(selectedColour);

      // Act

      const updatedState = reducerWithInjection(state, action);

      // Assert

      feedbackGeneratorMock.verify((fg) => fg(
        TypeMoq.It.is((l: List<Colour>) => l.contains(selectedColour)),
        TypeMoq.It.is((l: List<Colour>) => l.equals(targetSequence))),
        TypeMoq.Times.once());

      expect(updatedState.getAttemptDataFeedback(attempt)).to.equal(feedback);
    });

    it("doesn't assign feedback if currentAttemptSegment is less than sequence colour count", function() {

      // Arrange

      const colourReducerModule = require("inject-loader!../../src/reducers/colour-reducer");

      const feedbackGeneratorMock:
        TypeMoq.IMock<(s: List<Colour>, t: List<Colour>) => List<Colour>>
        = TypeMoq.Mock.ofInstance(
          (s: List<Colour>, t: List<Colour>) => List<Colour>());

      const reducerWithInjection = colourReducerModule({
        "../helpers/feedback-generator": {
          default: feedbackGeneratorMock.object,
        },
      }).default as (state: AppState, action: ReduxAction) => AppState;

      const state = new AppState()
        .setCurrentAttempt(2)
        .setCurrentAttemptSegment(0);

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      reducerWithInjection(state, action);

      // Assert

      feedbackGeneratorMock.verify((fg) => fg(
        TypeMoq.It.is((l: List<Colour>) => List.isList(l)),
        TypeMoq.It.is((l: List<Colour>) => List.isList(l))),
        TypeMoq.Times.never());
    });
  });

  describe("actionTypes.PositionSelected", function() {
    it("sets attempt and segment", function() {

      // Arrange

      const attempt = 5;
      const segment = 2;

      const state = new AppState();
      const action = actionCreators.onPositionSelected(attempt, segment);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(attempt);
      expect(updatedState.currentAttemptSegment).to.equal(segment);
    });
  });

  describe("actionTypes.ResetCurrentGame", function() {
    it("resets app state", function() {

      // Arrange

      const state = new AppState()
        .setCurrentAttempt(5)
        .setCurrentAttemptSegment(2)
        .setColourAtCurrentPosition(Colour.Orange);

      const action = actionCreators.onResetCurrentGame();

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(0);
      expect(updatedState.currentAttemptSegment).to.equal(0);

      const allColoursUnset = updatedState.attemptData.every((coloursArray) =>
        coloursArray.input.every((colour) => colour === Colour.None),
      );
      expect(allColoursUnset).to.equal(true);

      expect(updatedState.isGameLost).to.equal(false);
      expect(updatedState.isGameWon).to.equal(false);
    });
  });
});
