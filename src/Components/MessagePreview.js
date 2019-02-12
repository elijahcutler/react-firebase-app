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

const squidArray = [
  {
    recieved: 1,
    friend: "demitrius47",
    lastMessage: "man if you don't shut yo squidward house lookin' head up"
  }
];

const testArray = [
  {
    id: "foo",
    recieved: 1,
    friend: "Tester",
    lastMessage: "Test"
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
  loadRoom = id => {};

  render() {
    return (
      <div>
        {testArray.map(thread => {
          return (
            <div onClick={this.loadRoom(thread.id)}>
              <div style={styles.container}>
                <p style={styles.friendP}>Friend: {thread.friend}</p>
                <p style={styles.lastMessageP}>Message: {thread.lastMessage}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
