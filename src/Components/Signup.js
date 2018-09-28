import React, { Component } from "react";

const styles = {
  inputDiv: {
    lineHeight: "1.7em"
  }
};

export default class extends Component {
  render() {
    return (
      <div>
        <div style={styles.inputDiv}>
          <input type="text" placeholder="username" />
          <br />
          <input type="text" placeholder="e-mail address" />
          <br />
          <input type="text" placeholder="password" />
          <br />
          <input type="text" placeholder="verify password" />
        </div>
        <div>
          <p>Your password should be at least 6 characters long.</p>
        </div>
      </div>
    );
  }
}
