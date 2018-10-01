import React, { Component } from "react";

const styles = {
  errorDiv: {
    backgroundColor: "red"
  }
};

export default class extends Component {
  render() {
    return (
      <div style={styles.errorDiv}>
        {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
      </div>
    );
  }
}
