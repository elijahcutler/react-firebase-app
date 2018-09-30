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
    email: "",
    password: ""
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value })
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
  };

  login = () => {
    const email = this.state.email;
    const password = this.state.password;

    if (
      (
        email.length
        && password.length
      )
    ) {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error.code);
        console.log(error.message);
      });
    } else {
      console.log("Error. Please make sure all fields are filled.");
    }

  };

  render() {
    return (
      <div>
        <div style={styles.inputDiv}>
          <input type="text" placeholder="e-mail address" onChange={this.onEmailChange} />
          <br />
          <input type="text" placeholder="password" onChange={this.onPasswordChange} />
        </div>
        <div>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
