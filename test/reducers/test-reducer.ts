// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { List } from "immutable";
import { given } from "mocha-testdata";
import * as TypeMoq from "typemoq";
import * as actionCreators from "../../src/action/action-creators";
import { ReduxAction } from "../../src/action/actions";
import AppState from "../../src/model/app-state";
import { Colour } from "../../src/model/colour";
import { defaultParameters } from "../../src/model/new-game-parameters";
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

      const attemptId = 4;

      const state = new AppState()
        .setCurrentAttempt(attemptId)
        .setCurrentAttemptSegment(3);

      const action = actionCreators.onColourSelected(Colour.Black);

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(attemptId);
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

      const action = actionCreators.onResetCurrentGame(defaultParameters);

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

    it("sets target sequence length", function() {

      // Arrange

      const newLength = 7;
      const state = new AppState();

      const action = actionCreators.onResetCurrentGame({
        ...defaultParameters,
        colourSequenceLength: newLength,
      });

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.targetSequence.size).to.equal(newLength);
      expect(updatedState.attemptData[0].input.length).to.equal(newLength);
    });

    given(true, false)
      .it("generates sequence with duplicate colours if specified",
      function(allowDuplicates: boolean) {

        // Colour sequence is random; repeat test up to specified maximum iterations
        const maxAttempts = 5;
        let currentAttempt = 0;
        let testSuccess = false;

        // Arrange

        const state = new AppState();
        const action = actionCreators.onResetCurrentGame({
          ...defaultParameters,
          allowDuplicatesInTargetSequence: allowDuplicates,
        });

        while (!testSuccess && currentAttempt < maxAttempts) {

          // Act

          const updatedState = reducer(state, action);

          // Assert

          const sequenceColours = updatedState.targetSequence;
          const uniqueSequenceColours = sequenceColours.toSet();
          const hasDuplicates = sequenceColours.size !== uniqueSequenceColours.size;

          testSuccess = hasDuplicates === allowDuplicates;
          currentAttempt++;
        }

        expect(testSuccess).to.equal(true);
      });
  });

  describe("actionTypes.CheckSequence", function() {
    it("increments currentAttempt", function() {

      // Arrange

      const state = new AppState()
        .setCurrentAttempt(1);

      const action = actionCreators.onCheckSequence();

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttempt).to.equal(2);
    });

    it("resets currentAttemptSegment", function() {

      // Arrange

      const state = new AppState()
        .setCurrentAttemptSegment(2);

      const action = actionCreators.onCheckSequence();

      // Act

      const updatedState = reducer(state, action);

      // Assert

      expect(updatedState.currentAttemptSegment).to.equal(0);
    });

    it("assigns feedback to currentAttempt", function() {

      // Arrange

      const attempt = 2;
      const inputSequence = List<Colour>([Colour.Yellow, Colour.Orange, Colour.White]);
      const targetSequence = List<Colour>([Colour.Blue, Colour.Green, Colour.Red]);

      const checkSequenceReducerModule = require("inject-loader!../../src/reducers/check-sequence-reducer");

      const feedbackGeneratorMock:
        TypeMoq.IMock<(s: List<Colour>, t: List<Colour>) => List<Colour>>
        = TypeMoq.Mock.ofInstance(
          (s: List<Colour>, t: List<Colour>) => List<Colour>());

      const feedback = List<Colour>([Colour.Black, Colour.White, Colour.None]);

      feedbackGeneratorMock
        .setup((fg) => fg(
          TypeMoq.It.is((l: List<Colour>) => l.equals(inputSequence)),
          TypeMoq.It.is((l: List<Colour>) => l.equals(targetSequence))))
        .returns(() => feedback);

      const reducerWithInjection = checkSequenceReducerModule({
        "../helpers/feedback-generator": {
          default: feedbackGeneratorMock.object,
        },
      }).default as (state: AppState, action: ReduxAction) => AppState;

      const state = new AppState()
        .setSequenceColourCount(3)
        .setCurrentAttempt(attempt)
        .setCurrentAttemptSegment(0)
        .setColourAtCurrentPosition(inputSequence.get(0))
        .setCurrentAttemptSegment(1)
        .setColourAtCurrentPosition(inputSequence.get(1))
        .setCurrentAttemptSegment(2)
        .setColourAtCurrentPosition(inputSequence.get(2))
        .setTargetSequence(targetSequence);

      const action = actionCreators.onCheckSequence();

      // Act

      const updatedState = reducerWithInjection(state, action);

      // Assert

      feedbackGeneratorMock.verify((fg) => fg(
        TypeMoq.It.is((l: List<Colour>) => l.equals(inputSequence)),
        TypeMoq.It.is((l: List<Colour>) => l.equals(targetSequence))),
        TypeMoq.Times.once());

      expect(updatedState.getAttemptDataFeedback(attempt)).to.equal(feedback);
    });
  });
});
