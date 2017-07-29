import { fromJS, List, Map, Range } from "immutable";
import { Colour } from "./colour";

const currentAttemptKey = "currentAttemptKey";
const currentAttemptSegmentKey = "currentAttemptSegmentKey";
const gameStateKey = "gameStateKey";

const defaultMaxAttemptsCount = 8;
const defaultSequenceColourCount = 4;

const initializeGameState = (maxAttemptsCount: number, sequenceColourCount: number): List<List<Colour>> => {
  const gameState = Range(0, maxAttemptsCount)
    .map((rowIndex) => Range(0, sequenceColourCount)
      .map((columnIndex) => Colour.None).toList())
    .toList();

  return gameState;
};

export default class AppState {
  private stateMap = Map<string, any>();

  constructor() {
    this.stateMap = fromJS({
      gameStateKey: initializeGameState(defaultMaxAttemptsCount, defaultSequenceColourCount),
      sequenceColourCountKey: defaultSequenceColourCount,
    });
  }

  get gameState(): List<List<Colour>> {
    return this.stateMap.get(gameStateKey);
  }

  set gameState(value: List<List<Colour>>) {
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

  get maxAttemptsCount() {
    return this.gameState.count();
  }

  set maxAttemptsCount(value: number) {
    this.gameState = initializeGameState(value, this.sequenceColourCount);
  }

  get sequenceColourCount() {
    return this.gameState.first().count();
  }

  set sequenceColourCount(value: number) {
    this.gameState = initializeGameState(this.maxAttemptsCount, value);
  }
}
