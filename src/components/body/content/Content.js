import React, { Component } from 'react';

export default class Content extends Component {
    render() {
     console.log(this.props)
    return (
        <div style={{
            backgroundColor: this.props.data.bg, height: 100, flext: 1, width:300}}>
            {this.props. data.value} 
        </div>
    );
  }
}
