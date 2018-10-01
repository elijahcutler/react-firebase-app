import React, { Component } from "react";

const styles = {
  friendP: {},
  lastMessageP: {}
};

var user = {
  username: "",
  currentRoom: "",
  message: ""
};

var room = {
  friend: "",
  lastMessage: ""
};

export default class extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Current Room</h1>
        </div>
        <div />
      </div>
    );
  }
}
