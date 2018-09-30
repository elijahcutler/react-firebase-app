import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";

const styles = {
  titleDiv: {
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "1px",
    textAlign: "center",
    letterSpacing: "1.5px"
  },

  titleText: {
    fontSize: "2.5em",
    fontWeight: "bolder"
  },

  capsuleDiv: {
    flex: 1,
    backgroundColor: "yellow",
    backgroundImage: "linear-gradient(to bottom right, blue, yellow)",
    height: "100vh",
    backgroundSize: "cover"
  },

  authFields: {
    margin: "auto",
    height: "220px",
    padding: "10px",
    textAlign: "center"
  },

  authButtons: {
    margin: "auto",
    textAlign: "center",
    padding: "5px",
    height: "10px"
  },

  authHeaderText: {
    height: "100px",
    textAlign: "center",
    padding: "5px"
  }
};

export default class extends Component {
  state = {
    loginShown: true
  };

  loginClick = () => {
    this.setState({ loginShown: true });
  };

  signupClick = () => {
    this.setState({ loginShown: false });
  };

  render() {
    return (
      <div>
        <div style={styles.capsuleDiv}>
          <div style={styles.titleDiv}>
            <h1 style={styles.titleText}>FireChat</h1>
            <h2>Chat with peers about whatever you want.</h2>
          </div>
          <div style={styles.authHeaderText}>
            {this.state.loginShown ? (
              <h1>Login to existing account</h1>
            ) : (
              <h1>Create new account</h1>
            )}
          </div>
          <div style={styles.authFields}>
            {this.state.loginShown ? <Login /> : <Signup />}
          </div>
          <div style={styles.authButtons}>
            <button onClick={this.loginClick}>Login</button>
            <button onClick={this.signupClick}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
