import React, { Component } from 'react';

export default class State extends Component {
    state = {
        counter: 0,
    };

    ClickIncreament = () => {

        this.setState({ counter: this.state.counter + 1 })
    };
    ClickDecreament = () => {
        this.setState({ counter: this.state.counter - 1 })
    };
    ClickReset = () => {
        this.setState({counter:this.state.counter =0})
    }
    render() {
      console.log(this)
    return (
      <div>
            <h1>Counter:{this.state.counter }</h1>
            <button className='btn btn-primary mx-3' onClick={this.ClickIncreament}>increament</button>
            <button className='btn btn-primary ml-3' onClick={this.ClickDecreament}>decreament</button>
            <button className='btn btn-primary mx-3' onClick={this.ClickReset}>reaset</button>
      </div>
    );
  }
}
