/** @format */

// import { AppRegistry } from "react-native";
import App from "./App";

// import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from "react-native-navigation";

Navigation.registerComponent("example.FirstTabScreen", () => App);
Navigation.registerComponent("example.SecondTabScreen", () => App);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: "One",
      screen: "example.FirstTabScreen", // this is a registered name for a screen
      //   icon: require("./img/logo.png"),
      title: "Screen One"
    },
    {
      label: "Two",
      screen: "example.SecondTabScreen",
      //   icon: require("./img/logo.png"),
      title: "Screen Two"
    }
  ]
});
