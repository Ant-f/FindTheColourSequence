export interface IAction {
  type: string;
}

export interface ITypedAction<T> extends IAction {
  payload: T;
}
