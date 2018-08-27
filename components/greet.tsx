import * as React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

import { RootState } from "../store";

import {
  PRINT_HELLOWORLD,
  PRINT_HEY,
  greetAction
} from "../actions/greetAction";
import { Dispatch } from "redux";

import { connect } from "react-redux";

let wordA = "Hello Word";
let wordB = "Hey";

interface IGreetProps {
  message: string;
  printHelloWorld: () => void;
  printHey: () => void;
}

interface IGreetStates {
  // userInput: "";
}

class PureGreet extends React.Component<IGreetProps, IGreetStates> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{this.props.word}</Text>
        {/* <TouchableHighlight onPress={this.onPrintHelloWorld}> */}
        <TouchableHighlight onPress={this.props.printHelloWorld}>
          <Text style={styles.button}>Hello World</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={this.onPrintHey}> */}
        <TouchableHighlight onPress={this.props.printHey}>
          <Text style={styles.button}>Hey</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    message: state.greetMsg.msg
  };
};

const mapDispatchToProps = (dispatch: Dispatch<greetAction>) => {
  return {
    printHelloWorld: () =>
      dispatch({
        type: PRINT_HELLOWORLD,
        message: "Hello Word"
      }),

    printHey: () =>
      dispatch({
        type: PRINT_HEY,
        message: "Hey"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PureGreet);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  item: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
