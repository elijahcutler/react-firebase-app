import React, { Component } from "react";
import Error from "./Error";
import firebase from "firebase";

const styles = {
  inputDiv: {
    height: "210px",
    lineHeight: "1.7em"
  }
};

export default class extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    const email = this.state.email;
    const password = this.state.password;

    if (email.length && password.length) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          if (error.code === "auth/wrong-password") {
            this.setState({
              errorMessage: "The password you have entered is invalid."
            });
          } else if (error.code === "auth/user-not-found") {
            this.setState({
              errorMessage:
                "There is no account associated with this e-mail address."
            });
          } else {
            this.setState({ errorMessage: "AUTH ERROR: " + error.message });
          }
        });
    } else {
      this.setState({
        errorMessage:
          "Please make sure that both fields have been filled correctly."
      });
    }
  };

  render() {
    return (
      <div>
        <div style={styles.inputDiv}>
          <input
            type="text"
            placeholder="e-mail address"
            onChange={this.onEmailChange}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            onChange={this.onPasswordChange}
          />
          <div>
            <Error errorMessage={this.state.errorMessage} />
          </div>
        </div>
        <div>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
