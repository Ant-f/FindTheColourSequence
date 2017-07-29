import { List, Map, Range } from "immutable";
import { Colour } from "./colour";

const currentAttemptKey = "currentAttemptKey";
const currentAttemptSegmentKey = "currentAttemptSegmentKey";
const gameStateKey = "gameStateKey";

const initializeGameState = (maxAttemptsCount: number = 8, coloursInSequenceCount: number = 4): List<List<Colour>> => {
  const gameState = Range(0, maxAttemptsCount)
    .map((rowIndex) => Range(0, coloursInSequenceCount)
      .map((columnIndex) => Colour.None).toList())
    .toList();

  return gameState;
};

let stateMap = Map<string, any>();

export default class AppState {
  constructor() {
    stateMap = stateMap.set(gameStateKey, initializeGameState());
  }

  get gameState(): List<List<Colour>> {
    return stateMap.get(gameStateKey);
  }

  set gameState(value: List<List<Colour>>) {
    stateMap = stateMap.set(gameStateKey, value);
  }

  get currentAttempt(): number {
    return stateMap.get(currentAttemptKey);
  }

  set currentAttempt(value: number) {
    stateMap = stateMap.set(currentAttemptKey, value);
  }

  get currentAttemptSegment(): number {
    return stateMap.get(currentAttemptSegmentKey);
  }

  set currentAttemptSegment(value: number) {
    stateMap = stateMap.set(currentAttemptSegmentKey, value);
  }

  get maxAttemptsCount() {
    return this.gameState.count();
  }

  set maxAttemptsCount(value: number) {
    this.gameState = initializeGameState(value);
  }
}
