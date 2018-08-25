import {
  greetAction,
  PRINT_HELLOWORLD,
  PRINT_HEY
} from "../actions/greetAction";

export interface GreetState {
  word: string;
}

const initialState = {
  word: "Press me the print greet messgae ~ :D"
};

export function greetReducer(
  state: GreetState = initialState,
  action: greetAction
) {
  switch (action.type) {
    case PRINT_HELLOWORLD:
      return {
        word: "new hello world"
      };
    case PRINT_HEY:
      return { word: "new hey" };
    default:
      return state;
  }
}
