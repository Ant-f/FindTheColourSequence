import * as Actions from "../action/actions";
import AppState from "../model/app-state";

export default (state: AppState, action: Actions.IResetCurrentGame): AppState => {
  return new AppState(null, action.payload);
};
