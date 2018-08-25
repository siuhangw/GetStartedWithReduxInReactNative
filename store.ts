import { createStore, Action } from "redux";
import { combineReducers } from "redux";
import { GreetState, greetReducer } from "./reducers/greetReducer";
import { AuthState, authReducer } from "./reducers/authReducer";

export interface RootState {
  word: GreetState;
  auth: AuthState;
}

export const rootReducer = combineReducers<RootState>({
  word: greetReducer,
  auth: authReducer
});

export const store = createStore<RootState, Action, {}, {}>(rootReducer);
