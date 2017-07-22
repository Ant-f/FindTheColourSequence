import { IAction } from "../actions/action-interfaces";
import AppState from "../model/app-state";

const reducer = (state: AppState = new AppState(), action: IAction) => {
  return state;
};

export default reducer;
