import { createStore, Action } from "redux";
import { combineReducers } from "redux";
import { MessageState, messageReducer } from "./reducers/reducer";

export interface RootState {
  word: MessageState;
}

export const rootReducer = combineReducers<RootState>({
  word: messageReducer
});

export const store = createStore<RootState, Action, {}, {}>(rootReducer);
