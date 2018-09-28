import React, { Component } from "react";

const styles = {
  footerDiv: {},

  footer: {
    width: "100%",
    positon: "absolute",
    bottom: "0",
    height: "60px",
    background: "#a442f4",
    zIndex: "10"
  }
};

export default class extends Component {
  render() {
    return (
      <div style={styles.footer}>
        <div style={styles.footerDiv}>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    );
  }
}
