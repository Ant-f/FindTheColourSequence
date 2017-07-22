import { Colour } from "./colour";
import { fromJS, List, Map } from "immutable";

const colourRowsKey = "colourRowsKey";
const totalRowCountKey = "totalRowCountKey";

const stateMap = Map<string, any>({
  "colourRowsKey": fromJS([[Colour.Red, Colour.Blue, Colour.Yellow, Colour.Orange]]),
  "totalRowCountKey": 7
});

export default class AppState {
  get colourRows(): List<List<Colour>> {
    return <List<List<Colour>>> stateMap.get(colourRowsKey);
  }

  set colourRows(value: List<List<Colour>>) {
    stateMap.set(colourRowsKey, value);
  }

  get totalRowCount(): number {
    return <number> stateMap.get(totalRowCountKey);
  }

  set totalRowCount(value: number) {
    stateMap.set(totalRowCountKey, value);
  }
}