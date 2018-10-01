import React, { Component } from "react";

const styles = {
  footerDiv: {},

  footer: {
    width: "100%",
    positon: "absolute",
    padding: "1rem",
    backgroundColor: "#a442f4",
    textAlign: "center"
  }
};

export default class extends Component {
  render() {
    return (
      <div style={styles.footer}>
        <h2>Privacy Policy</h2>
      </div>
    );
  }
}
