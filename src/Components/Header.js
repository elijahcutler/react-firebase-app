import React, { Component } from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";

const styles = {
  headerDiv: {
    margin: "auto",
    padding: "10px",
    width: "95%"
  },
  header: {
    float: "right",
    display: "inline"
  }
};

export default class extends Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
      });
  };

  render() {
    return (
      <div style={styles.headerDiv}>
        <div style={styles.header}>
          <Button variant="contained" color="primary" onClick={this.logout}>
            Log Out
          </Button>
        </div>
      </div>
    );
  }
}
