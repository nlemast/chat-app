import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import ChatApp from './ChatApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
  }

  usernameSubmitHandler() {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  usernameChangeHandler() {
    this.setState({ username: event.target.value });
  }

  render() {
    if (this.state.submitted === true) {
      return <ChatApp username={this.state.username} />;
    }

    return (
      <form onSubmit={this.usernameSubmitHandler} className="usernameContainer">
        <h1>Who are you</h1>
        <div>
          <input
            className="inputForm"
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="?"
            required
          />
        </div>
        <input className="submitButton" type="submit" value="Let's find out" />
      </form>
    );
  }
}

export default App;
