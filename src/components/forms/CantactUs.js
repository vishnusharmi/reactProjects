import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CantactUs extends Component {
  state = {
    email: "",
    password: "",
    emailErr: "",
    passwordErr: "",
    massage: "",
  };
  handleClick = (e) => {
    e.preventDefault();
    const isValid = this.formValid();
    if (isValid) {
      this.setState({ massage: "Submitted" });
    }
  };

  formValid = () => {
    let emailErr = "";
    let passwordErr = "";

    if (!this.state.email.includes("@")) {
      emailErr = "please enter a valide email";
    }
    if (this.state.password.length < 5) {
      passwordErr = "please enter valid password";
    }

    if (emailErr || passwordErr) {
      this.setState({ emailErr, passwordErr });
    } else {
      this.setState({ emailErr, passwordErr });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div style={{ width: "50%" }}>
        <Form>
          <p className="text-success">{this.state.massage}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-danger">{this.state.emailErr}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {this.state.passwordErr}
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleClick}>
            Submit
          </Button>
        </Form>
        <Link to={"/vishnu"}>
          <button>Link</button>
        </Link>
      </div>
    );
  }
}
