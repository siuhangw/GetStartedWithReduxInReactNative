import { messageAction, PRINT_HELLOWORLD, PRINT_HEY } from "../actions/action";

export interface MessageState {
  word: string;
}

const initialState = {
  word: "Press me the print greet messgae ~ :D"
};

export function messageReducer(
  state: MessageState = initialState,
  action: messageAction
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
