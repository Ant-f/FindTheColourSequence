// tslint:disable:only-arrow-functions

import { expect } from "chai";
import { List } from "immutable";
import { given } from "mocha-testdata";
import * as TypeMoq from "typemoq";
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

  it("allows target sequence to be set", function() {

    // Arrange

    const newValue = List<Colour>([Colour.Yellow, Colour.Blue]);
    const state = new AppState();

    // Act

    const updatedState = state.setTargetSequence(newValue);

    // Assert

    expect(updatedState.targetSequence).to.equal(newValue);
  });

  given(true, false)
    .it("is initialized with target sequence", function(allowDuplicates: boolean) {

    // Arrange

    const appStateModule = require("inject-loader!../../src/model/app-state");

    const sequenceGeneratorMock: TypeMoq.IMock<(n: number, d: boolean) => List<Colour>>
      = TypeMoq.Mock.ofInstance((n: number, d: boolean) => List<Colour>());

    const targetSequence = List<Colour>([Colour.Yellow, Colour.Blue, Colour.Red]);

    sequenceGeneratorMock
      .setup((tsg) => tsg(
        TypeMoq.It.isAnyNumber(),
        TypeMoq.It.isAny()))
      .returns(() => targetSequence);

    const AppStateWithInjection = appStateModule({
      "../helpers/target-sequence-generator": {
        default: sequenceGeneratorMock.object,
      },
    }).default;

    // Act

    const appState = new AppStateWithInjection(null, allowDuplicates) as AppState;

    // Assert

    sequenceGeneratorMock
      .verify((tsg) => tsg(
        TypeMoq.It.isAnyNumber(),
        TypeMoq.It.isValue(allowDuplicates)),
      TypeMoq.Times.once());

    expect(appState.targetSequence).to.equal(targetSequence);
  });

  interface IIsGameLostArgs {
    attempt: number;
    isLost: boolean;
    maxAttempts: number;
  }

  given({ attempt: 7, maxAttempts: 6, isLost: true },
        { attempt: 6, maxAttempts: 6, isLost: true },
        { attempt: 5, maxAttempts: 6, isLost: false })
    .it("sets isGameLost based on currentAttempt value", function(arg: IIsGameLostArgs) {

    // Arrange

    const state = new AppState().setMaxAttemptsCount(arg.maxAttempts);

    // Act

    const updatedState = state.setCurrentAttempt(arg.attempt);

    // Assert

    expect(updatedState.isGameLost).to.equal(arg.isLost);
  });

  it("sets isGameWon false if gameState has sequence matching target sequence at currentAttempt", function() {

    // Arrange

    const state = new AppState();
    const setupState = state.setTargetSequence(
      List([Colour.Red, Colour.Blue, Colour.Green, Colour.Yellow]));

    // Act

    const updatedState = setupState.setProperties((appState) => appState
      .setCurrentAttempt(3)
      .setCurrentAttemptSegment(0)
      .setColourAtCurrentPosition(Colour.Red)
      .setCurrentAttemptSegment(1)
      .setColourAtCurrentPosition(Colour.Blue)
      .setCurrentAttemptSegment(2)
      .setColourAtCurrentPosition(Colour.Green)
      .setCurrentAttemptSegment(3)
      .setColourAtCurrentPosition(Colour.Yellow));

    // Assert

    expect(updatedState.isGameWon).to.equal(false);
  });

  it("sets isGameWon true if gameState has sequence matching target sequence before currentAttempt", function() {

    // Arrange

    const state = new AppState();
    const setupState = state.setTargetSequence(
      List([Colour.Red, Colour.Blue, Colour.Green, Colour.Yellow]));

    // Act

    const updatedState = setupState.setProperties((appState) => appState
      .setCurrentAttempt(3)
      .setCurrentAttemptSegment(0)
      .setColourAtCurrentPosition(Colour.Red)
      .setCurrentAttemptSegment(1)
      .setColourAtCurrentPosition(Colour.Blue)
      .setCurrentAttemptSegment(2)
      .setColourAtCurrentPosition(Colour.Green)
      .setCurrentAttemptSegment(3)
      .setColourAtCurrentPosition(Colour.Yellow)
      .setCurrentAttempt(4));

    // Assert

    expect(updatedState.isGameWon).to.equal(true);
  });

  it("sets isGameWon false if gameState has no sequence matching target sequence", function() {

    // Arrange

    const state = new AppState();

    // Act

    const updatedState = state.setTargetSequence(
      List([Colour.Red, Colour.Blue, Colour.Green, Colour.Yellow]));

    // Assert

    expect(updatedState.isGameWon).to.equal(false);
  });

  it("allows attempt data feedback to be set", function() {

    // Arrange

    const attempt = 2;
    const feedback = List<Colour>([Colour.Red, Colour.Purple, Colour.White]);
    const state = new AppState();

    // Act

    const updatedState = state.setAttemptDataFeedback(attempt, feedback);

    // Assert

    expect(updatedState.getAttemptDataFeedback(attempt)).to.equal(feedback);
  });
});
