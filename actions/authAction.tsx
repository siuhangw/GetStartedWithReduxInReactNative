import { Dispatch } from "redux";

export const LOGIN = "LOGIN";
export type LOGIN = typeof LOGIN;

export interface loginAction {
  type: LOGIN;
}

export type authAction = loginAction;

export function loginAction() {
  console.log("Login...");
  return {
    type: loginAction
  };
}
