import { fromJS, List, Map } from "immutable";
import { Colour } from "./colour";

const colourRowsKey = "colourRowsKey";
const totalRowCountKey = "totalRowCountKey";

let stateMap = Map<string, any>({
  colourRowsKey: fromJS([[Colour.Red, Colour.Blue, Colour.Yellow, Colour.Orange]]),
  totalRowCountKey: 7,
});

export default class AppState {
  get colourRows(): List<List<Colour>> {
    return stateMap.get(colourRowsKey) as List<List<Colour>>;
  }

  set colourRows(value: List<List<Colour>>) {
    stateMap = stateMap.set(colourRowsKey, value);
  }

  get totalRowCount(): number {
    return stateMap.get(totalRowCountKey) as number;
  }

  set totalRowCount(value: number) {
    stateMap = stateMap.set(totalRowCountKey, value);
  }
}
