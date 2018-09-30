import React, { Component } from "react";
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
    passwordVerify: ""
  };

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value })
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  };

  onPasswordVerifyChange = (e) => {
    this.setState({ passwordVerify: e.target.value })
  };

  signup = () => {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const passwordVerify = this.state.passwordVerify;

    if (
      (username.length
        && email.length
        && password.length
        && passwordVerify.length)
    ) {

      if (password === passwordVerify) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(error.code);
          console.log(error.message);
        });
      } else {
        console.log("Error. Please verify that the passwords you entered match.");
      }
    } else {
      console.log("Error. Please make sure all fields are filled.");
    }

  };


  render() {
    return (
      <div>
        <div style={styles.inputDiv}>
          <div>
            <input type="text" placeholder="username" onChange={this.onUsernameChange} />
            <br />
            <input type="text" placeholder="e-mail address" onChange={this.onEmailChange} />
            <br />
            <input type="text" placeholder="password" onChange={this.onPasswordChange} />
            <br />
            <input type="text" placeholder="verify password" onChange={this.onPasswordVerifyChange} />
          </div>
          <div>
            <p>Your password should be at least 6 characters long.</p>
          </div>
        </div>
        <div>
          <button onClick={this.signup}>Sign Up</button>
        </div>
      </div>
    );
  }
}
