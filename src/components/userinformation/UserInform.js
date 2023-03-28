import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserInform extends Component {
  render() {
    return (
      <div>
        <h1>New windwo Open</h1>
        <Link to={"function"}>
          <button>Open</button>
        </Link>
      </div>
    );
  }
}
