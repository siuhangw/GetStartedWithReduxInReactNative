import * as React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { connect } from "react-redux";
// import { printHelloWorld, printHey, messageAction } from "../actions/action";
import { PRINT_HELLOWORLD, PRINT_HEY, messageAction } from "../actions/action";
import { Dispatch } from "redux";
import { RootState } from "../store";

interface IGreetProps {
  word: string;
  printHelloWorld: () => void;
  printHey: () => void;
}

interface IGreetStates {
  // userInput: "";
}

class PureGreet extends React.Component<IGreetProps, IGreetStates> {
  render() {
    return (
      <View>
        <Text>{this.props.word}</Text>
        {/* <TouchableHighlight onPress={this.onPrintHelloWorld}> */}
        <TouchableHighlight onPress={this.props.printHelloWorld}>
          <Text>Hello World</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={this.onPrintHey}> */}
        <TouchableHighlight onPress={this.props.printHey}>
          <Text>Hey</Text>
        </TouchableHighlight>
      </View>
    );
  }

  // onPrintHelloWorld = () => {
  //   printHelloWorld();
  // };

  // onPrintHey = () => {
  //   printHey();
  // };
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
        word: "Hello World"
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
