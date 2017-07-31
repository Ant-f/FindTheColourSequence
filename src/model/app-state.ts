import { fromJS, List, Map, Range } from "immutable";
import { Colour } from "./colour";

const currentAttemptKey = "currentAttempt";
const currentAttemptSegmentKey = "currentAttemptSegment";
const gameStateKey = "gameState";

const defaultMaxAttemptsCount = 8;
const defaultSequenceColourCount = 4;

type GameState = List<List<Colour>>;
type StateMap = Map<string, any>;

const initializeGameState = (maxAttemptsCount: number, sequenceColourCount: number): GameState => {
  if (maxAttemptsCount < 1) {
    throw new Error(`Invalid maxAttemptsCount value: ${maxAttemptsCount}`);
  }

  if (sequenceColourCount < 1) {
    throw new Error(`Invalid sequenceColourCount value: ${maxAttemptsCount}`);
  }

  const gameState = Range(0, maxAttemptsCount)
    .map((rowIndex) => Range(0, sequenceColourCount)
      .map((columnIndex) => Colour.None).toList())
    .toList();

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
        sequenceColourCountKey: defaultSequenceColourCount,
      });
    }
  }

  get gameState(): GameState {
    return this.stateMap.get(gameStateKey);
  }

  public setGameState(value: GameState): AppState {
    const updatedRawState = this.stateMap.set(gameStateKey, value);
    return new AppState(updatedRawState);
  }

  get currentAttempt(): number {
    return this.stateMap.get(currentAttemptKey);
  }

  public setCurrentAttempt(value: number): AppState {
    const updatedRawState = this.stateMap.set(currentAttemptKey, value);
    return new AppState(updatedRawState);
  }

  get currentAttemptSegment(): number {
    return this.stateMap.get(currentAttemptSegmentKey);
  }

  public setCurrentAttemptSegment(value: number): AppState {
    const updatedRawState = this.stateMap.set(currentAttemptSegmentKey, value);
    return new AppState(updatedRawState);
  }

  get maxAttemptsCount(): number {
    return this.gameState.count();
  }

  public setMaxAttemptsCount(value: number): AppState {
    const updatedAppState = this.setGameState(
      initializeGameState(value, this.sequenceColourCount));

    return updatedAppState;
  }

  get sequenceColourCount(): number {
    return this.gameState.first().count();
  }

  public setSequenceColourCount(value: number): AppState {
    const updatedAppState = this.setGameState(
      initializeGameState(this.maxAttemptsCount, value));
    return updatedAppState;
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
    const updatedAppState = this.setGameState(
      this.gameState.setIn([
        this.currentAttempt,
        this.currentAttemptSegment,
      ], colour));

    return updatedAppState;
  }
}
