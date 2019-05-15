import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="actualMessage">
        <div className="username">{this.props.username}</div>
        <div className="messageBody">{this.props.messageBody}</div>
      </div>
    );
  }
}

export default Message;
