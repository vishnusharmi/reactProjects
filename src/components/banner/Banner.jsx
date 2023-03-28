import React, { Component } from 'react';
import Logo from '../header/logo/Logo';

// dont use internal style
const internal = {
    backgroundColor: "gold",
};

export default class Banner extends Component {
  render() {
    return (
      <div style={internal} >
            <Logo />
            <h1>Banner</h1>
      </div>
    );
  }
}
