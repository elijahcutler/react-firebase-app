import React, { Component } from "react";
import MessagePreview from "./MessagePreview";

const styles = {
  titleDiv: {
    paddingBottom: "10px"
  }
};

// var user = {
//   username: "",
//   currentRoom: "",
//   message: ""
// };

// var room = {
//   friend: "",
//   lastMessage: ""
// };

export default class extends Component {
  render() {
    return (
      <div>
        <div style={styles.titleDiv}>
          <h1>Messages</h1>
        </div>
        <div>
          <MessagePreview />
        </div>
      </div>
    );
  }
}
