import * as React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

import { RootState } from "../store";

import { LOGIN, authAction } from "../actions/authAction";
import { Dispatch } from "redux";

import { connect } from "react-redux";

interface IAuthProps {
  authPageMessage: string;
  isAuthenicated: boolean;
  login: () => void;
}

interface IAuthStates {
  // userInput: "";
}

class PureAuth extends React.Component<IAuthProps, IAuthStates> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{this.props.authPageMessage}</Text>
        <TouchableHighlight onPress={this.props.login}>
          <Text style={styles.button}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authPageMessage: "You are not allowed to read this content without login!",
    isAuthenicated: false
  };
};

const mapDispatchToProps = (dispatch: Dispatch<authAction>) => {
  return {
    login: () =>
      dispatch({
        type: LOGIN
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PureAuth);

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
