import { loginAction, LOGIN } from "../actions/authAction";

export interface AuthState {
  auth: string;
}

const initialState = {
  auth: "Press me the print greet messgae ~ :D"
};

export function authReducer(
  state: AuthState = initialState,
  action: loginAction
) {
  switch (action.type) {
    case LOGIN:
      return {
        auth: "new hello world"
      };
    default:
      return state;
  }
}
