import { Dispatch } from "redux";

export const PRINT_HELLOWORLD = "PRINT_HELLOWORLD";
export type PRINT_HELLOWORLD = typeof PRINT_HELLOWORLD;
export const PRINT_HEY = "PRINT_HEY";
export type PRINT_HEY = typeof PRINT_HEY;

export interface printHelloWorld {
  type: PRINT_HELLOWORLD;
}

export interface printHey {
  type: PRINT_HEY;
}

export type messageAction = printHelloWorld | printHey;

// function findPrintHelloWorld() {
//   return {
//     type: printHelloWorld
//   };
// }

// function findPrintWorld() {
//   return {
//     type: printHey
//   };
// }

export function printHelloWorld() {
  return {
    type: printHelloWorld
  };
  console.log("Hello World");
}

export function printHey() {
  return {
    type: printHey
  };
  console.log("Hey");
}

// export function printMessages(userInput: string) {
//   if (userInput === "Hi") {
//     return {
//       type: PRINT_HELLO
//     };
//   } else {
//     return {
//       type: PRINT_WORLD
//     };
//   }
// }
