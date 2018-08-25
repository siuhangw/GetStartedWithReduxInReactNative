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

export type greetAction = printHelloWorld | printHey;

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
  console.log("Hello World");
  return {
    type: printHelloWorld
  };
}

export function printHey() {
  console.log("Hey");
  return {
    type: printHey
  };
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
