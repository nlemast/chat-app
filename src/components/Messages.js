import React, { Component } from 'react';

class Messages extends Component {
  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          username={message.username}
          messageBody={message.message}
        />
      );
    });
    return (
      <div className="messages" id="messageList">
        {messages}
      </div>
    );
  }
}

export default Messages;
