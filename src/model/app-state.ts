import { fromJS, List, Map, Range } from "immutable";
import GenerateTargetSequence from "../helpers/target-sequence-generator";
import { Colour } from "./colour";
import ISequenceAttemptData from "./sequence-attempt-data";

const currentAttemptKey = "currentAttempt";
const currentAttemptSegmentKey = "currentAttemptSegment";
const feedbackKey = "feedback";
const gameStateKey = "gameState";
const inputKey = "input";
const targetSequenceKey = "targetSequence";

const defaultMaxAttemptsCount = 12;
const defaultSequenceColourCount = 4;

type GameState = List<ISequenceAttemptData>;
type StateMap = Map<string, any>;

const generateEmptySequence = (sequenceColourCount: number): List<Colour> => {
  return Range(0, sequenceColourCount)
    .map((columnIndex) => Colour.None)
    .toList();
};

const initializeGameState = (maxAttemptsCount: number, sequenceColourCount: number): GameState => {
  if (maxAttemptsCount < 1) {
    throw new Error(`Invalid maxAttemptsCount value: ${maxAttemptsCount}`);
  }

  if (sequenceColourCount < 1) {
    throw new Error(`Invalid sequenceColourCount value: ${maxAttemptsCount}`);
  }

  const gameState = Range(0, maxAttemptsCount).map((rowIndex) => {
    return fromJS({
      [feedbackKey]: generateEmptySequence(sequenceColourCount),
      [inputKey]: generateEmptySequence(sequenceColourCount),
    });
  }).toList();

  return gameState;
};

export default class AppState {
  private stateMap = Map<string, any>();

  constructor(rawState: StateMap = null) {
    if (rawState) {
      this.stateMap = rawState;
    }
    else {
      this.stateMap = fromJS({
        currentAttempt: 0,
        currentAttemptSegment: 0,
        gameState: initializeGameState(defaultMaxAttemptsCount, defaultSequenceColourCount),
        isGameLost: false,
        isGameWon: false,
        sequenceColourCountKey: defaultSequenceColourCount,
        targetSequence: GenerateTargetSequence(defaultSequenceColourCount),
      });
    }
  }

  get attemptData(): ISequenceAttemptData[] {
    return this.stateMap.get(gameStateKey).toJS();
  }

  get currentAttempt(): number {
    return this.stateMap.get(currentAttemptKey);
  }

  public setCurrentAttempt(value: number): AppState {
    const updatedState = this.stateMap.set(currentAttemptKey, value);
    return new AppState(updatedState);
  }

  get currentAttemptSegment(): number {
    return this.stateMap.get(currentAttemptSegmentKey);
  }

  public setCurrentAttemptSegment(value: number): AppState {
    const updatedState = this.stateMap.set(currentAttemptSegmentKey, value);
    return new AppState(updatedState);
  }

  get maxAttemptsCount(): number {
    return this.stateMap.get(gameStateKey).size;
  }

  public setMaxAttemptsCount(value: number): AppState {
    const updatedState = this.stateMap.set(gameStateKey,
      initializeGameState(value, this.sequenceColourCount));

    return new AppState(updatedState);
  }

  get sequenceColourCount(): number {
    return this.stateMap.get(gameStateKey).getIn([0, inputKey]).size;
  }

  public setSequenceColourCount(value: number): AppState {
    const updatedState = this.stateMap.set(gameStateKey,
      initializeGameState(this.maxAttemptsCount, value));

    return new AppState(updatedState);
  }

  /**
   * Sets multiple properties as a single operation
   * @param update Function for updating properties
   */
  public setProperties(update: (appState: AppState) => AppState): AppState {
    const updatedStateMap = this.stateMap.withMutations((rawState) => {
      const tempAppState = new AppState(rawState);
      update(tempAppState);
    });
    return new AppState(updatedStateMap);
  }

  public setColourAtCurrentPosition(colour: Colour): AppState {
    const updatedState = this.stateMap.setIn([
      gameStateKey,
      this.currentAttempt,
      inputKey,
      this.currentAttemptSegment,
    ], colour);

    return new AppState(updatedState);
  }

  get targetSequence(): List<Colour> {
    return this.stateMap.get(targetSequenceKey);
  }

  public setTargetSequence(value: List<Colour>): AppState {
    const updatedState = this.stateMap.set(targetSequenceKey, value);
    return new AppState(updatedState);
  }

  get isGameLost(): boolean {
    return this.currentAttempt >= this.maxAttemptsCount;
  }

  get isGameWon(): boolean {
    const won = this.stateMap.get(gameStateKey).some((s: Map<string, List<Colour>>) =>
      s.get(inputKey).equals(this.targetSequence));

    return won;
  }

  public getAttemptDataFeedback(attempt: number): List<Colour> {
    const feedback = this.stateMap.getIn([gameStateKey, attempt, feedbackKey]);
    return feedback;
  }

  public setAttemptDataFeedback(attempt: number, feedback: List<Colour>): AppState {
    const updatedState = this.stateMap.setIn(
      [gameStateKey, attempt, feedbackKey],
      feedback);

    return new AppState(updatedState);
  }

  public getAttemptDataInput(attempt: number): List<Colour> {
    const input = this.stateMap.getIn([gameStateKey, attempt, inputKey]);
    return input;
  }
}
