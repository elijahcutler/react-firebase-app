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
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
    errorMessage: ""
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onPasswordVerifyChange = e => {
    this.setState({ passwordVerify: e.target.value });
  };

  signup = () => {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const passwordVerify = this.state.passwordVerify;

    if (
      username.length &&
      email.length &&
      password.length &&
      passwordVerify.length
    ) {
      if (password.length >= 6) {
        if (password === passwordVerify) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
              this.setState({ errorMessage: error.message });
            });
        } else {
          //passwords don't match
          this.setState({
            errorMessage: "Please verify that the passwords you entered match."
          });
        }
      } else {
        // password < 6 characters
        this.setState({
          errorMessage:
            "Please make sure your password is at least 6 characters long."
        });
      }
    } else {
      //at least one field is empty
      this.setState({
        errorMessage:
          "Please make sure that all fields have been filled correctly."
      });
    }
  };

  render() {
    return (
      <div>
        <div style={styles.inputDiv}>
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={this.onUsernameChange}
            />
            <br />
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
            <br />
            <input
              type="text"
              placeholder="verify password"
              onChange={this.onPasswordVerifyChange}
            />
          </div>
          <div>
            <Error errorMessage={this.state.errorMessage} />
          </div>
        </div>
        <div>
          <button onClick={this.signup}>Sign Up</button>
        </div>
      </div>
    );
  }
}
