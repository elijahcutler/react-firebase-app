import React, { Component } from "react";

const styles = {
  container: {
    wordWrap: "normal",
    width: "300px",
    borderTopStyle: "solid",
    borderWidth: "1px",
    borderColor: "grey",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  friendP: {
    fontSize: "1.2em",
    lineHeight: "0.1em",
    fontWeight: "bold"
  },
  lastMessageP: {
    fontWeight: "normal",
    paddingBottom: "0.5em"
  }
};

const userTest1 = {
  recieved: "0",
  friend: "joeschmoe12",
  lastMessage:
    "Hey man, hope you have been having a good day today. What are we doing this weekend?"
};

const userTest2 = {
  recieved: "1",
  friend: "demitrius47",
  lastMessage: "man if you don't shut yo squidward house lookin' head up "
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
        <div style={styles.container}>
          <p style={styles.friendP}>{userTest1.friend}</p>
          <p style={styles.lastMessageP}>{userTest1.lastMessage}</p>
        </div>
        <div style={styles.container}>
          <p style={styles.friendP}>{userTest2.friend}</p>
          <p style={styles.lastMessageP}>{userTest2.lastMessage}</p>
        </div>
      </div>
    );
  }
}
