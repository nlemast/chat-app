import React, { Component } from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  sendHandler(message) {
    const messageObj = {
      username: this.props.username,
      message
    };
    this.addMessage(messageObj);
  }

  addMessage(message) {
    // add message to component
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="messageContainer">
        <h1>FOOLISH ONE</h1>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}

export default ChatApp;
