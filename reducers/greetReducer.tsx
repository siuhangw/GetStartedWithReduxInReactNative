import {
  greetAction,
  PRINT_HELLOWORLD,
  PRINT_HEY
} from "../actions/greetAction";

export interface GreetState {
  msg: string;
}

const initialState = {
  msg: "Press me the print greet messgae ~ :D"
};

export function greetReducer(
  state: GreetState = initialState,
  action: greetAction
) {
  switch (action.type) {
    case PRINT_HELLOWORLD:
      return {
        msg: "new hello world"
      };
    case PRINT_HEY:
      return { msg: "new hey" };
    default:
      return state;
  }
}
