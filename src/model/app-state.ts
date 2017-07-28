import { List, Map, Range } from "immutable";
import { Colour } from "./colour";

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
    return stateMap.get(gameStateKey) as List<List<Colour>>;
  }

  set gameState(value: List<List<Colour>>) {
    stateMap = stateMap.set(gameStateKey, value);
  }

  get maxAttemptsCount(): number {
    const gameState = stateMap.get(gameStateKey) as List<List<Colour>>;
    return gameState.count();
  }

  set maxAttemptsCount(value: number) {
    stateMap = stateMap.set(gameStateKey, initializeGameState(value));
  }
}
