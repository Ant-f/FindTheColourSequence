export interface Action {
  type: string;
}

export interface TypedAction<T> extends Action {
  payload: T;
}