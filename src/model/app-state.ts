import { fromJS, List, Map, Range } from "immutable";
import { Colour } from "./colour";

const currentAttemptKey = "currentAttemptKey";
const currentAttemptSegmentKey = "currentAttemptSegmentKey";
const gameStateKey = "gameStateKey";

const defaultMaxAttemptsCount = 8;
const defaultSequenceColourCount = 4;

type GameState = List<List<Colour>>;
type StateMap = Map<string, any>;

const initializeGameState = (maxAttemptsCount: number, sequenceColourCount: number): GameState => {
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
        gameStateKey: initializeGameState(defaultMaxAttemptsCount, defaultSequenceColourCount),
        sequenceColourCountKey: defaultSequenceColourCount,
      });
    }
  }

  get gameState(): GameState {
    return this.stateMap.get(gameStateKey);
  }

  set gameState(value: GameState) {
    this.stateMap = this.stateMap.set(gameStateKey, value);
  }

  get currentAttempt(): number {
    return this.stateMap.get(currentAttemptKey);
  }

  set currentAttempt(value: number) {
    this.stateMap = this.stateMap.set(currentAttemptKey, value);
  }

  get currentAttemptSegment(): number {
    return this.stateMap.get(currentAttemptSegmentKey);
  }

  set currentAttemptSegment(value: number) {
    this.stateMap = this.stateMap.set(currentAttemptSegmentKey, value);
  }

  get maxAttemptsCount(): number {
    return this.gameState.count();
  }

  set maxAttemptsCount(value: number) {
    this.gameState = initializeGameState(value, this.sequenceColourCount);
  }

  get sequenceColourCount(): number {
    return this.gameState.first().count();
  }

  set sequenceColourCount(value: number) {
    this.gameState = initializeGameState(this.maxAttemptsCount, value);
  }

  /**
   * Sets multiple properties as a single operation
   * @param update Function for updating properties
   */
  public setProperties(update: (appState: AppState) => void) {
    this.stateMap = this.stateMap.withMutations((rawState) => {
      const tempAppState = new AppState(rawState);
      update(tempAppState);
    });
  }
}
