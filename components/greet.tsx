import * as React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

import { RootState } from "../store";

import { PRINT_HELLOWORLD, PRINT_HEY, messageAction } from "../actions/action";
import { Dispatch } from "redux";

import { connect } from "react-redux";

interface IGreetProps {
  word: string;
  printHelloWorld: () => void;
  printHey: () => void;
}

interface IGreetStates {
  // userInput: "";
}

let wordA = "Hello Word";
let wordB = "Hey";

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
    word: state.word.word
  };
};

const mapDispatchToProps = (dispatch: Dispatch<messageAction>) => {
  return {
    printHelloWorld: () =>
      dispatch({
        type: PRINT_HELLOWORLD,
        word: "Hello Word"
      }),

    printHey: () =>
      dispatch({
        type: PRINT_HEY,
        word: "Hey"
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
