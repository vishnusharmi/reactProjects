import React, { Component } from 'react';

export default class UserTable extends Component {
    state = {
     particulars:[],
     };
    getUser = async () => {
        const respond = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await respond.json();
        this.setState({ particulars: data });
        console.log(data);
    };
        componentDidMount() {
            this.getUser();
    };
 
  render() {
      return (
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>website</th>
              </tr>
            </thead>
            <tbody>
              {this.state.particulars.map((ele) => (
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}


