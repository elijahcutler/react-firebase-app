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

const testArray = [
  {
    recieved: 1,
    friend: "demitrius47",
    lastMessage: "man if you don't shut yo squidward house lookin' head up"
  }
];

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
        {testArray.map(thread => {
          return (
            <div style={styles.container}>
              <p style={styles.friendP}>{thread.friend}</p>
              <p style={styles.lastMessageP}>{thread.lastMessage}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
