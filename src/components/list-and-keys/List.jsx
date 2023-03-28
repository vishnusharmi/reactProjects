import React, { Component } from 'react';

class GreetTheUser extends Component{
    render() {
        return <h1>welcome back</h1>
    }

}

class GuestGreeting extends Component{
    render() {
        return <h1>hello world</h1>
    }
}

export default class List extends Component {
  render() {
    return (
      <div>
        {true?<GreetTheUser/>:<GuestGreeting/>}
      </div>
    );
  }
}
