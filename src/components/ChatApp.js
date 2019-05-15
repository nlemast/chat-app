import React, { Component } from 'react';
import Messages from './Messages';

class ChatApp extends Component {
  render() {
    return (
      <div className="messageContainer">
        <h1>FOOLISH ONE</h1>
        <Messages messages={this.state.messages} />
        <ChatInput />
      </div>
    );
  }
}

export default ChatApp;
