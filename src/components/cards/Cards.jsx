
import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
  state = {
    userData: null,
    pageNumber: 0,
    
  };
  getUsersData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}1&limit=10`, {
      method: "GET",
      headers: {
        "app-id": "63f9bb1edf34608b0d3b7410"
      }
    });
    const data = await response.json();
    this.setState({ userData: data.data })
    console.log(data.data)
  }
  //after render
  //networkcall
  //componentdidmount

  componentDidMount() {
    this.getUsersData()
  }

  handlepage = (value) => {
    this.setState({ pagenumber: value })
  };

  componentDidUpdate(prevsprops,prevsState) {
   
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getUsersData()
    }
  }

  render() {
    console.log(this.state);
    return (
      < div >
      
    
        {this.state.userData ? (
          <div className="container mt-4">
            <div className="row">
              {
                this.state.userData.map((user) =>
                (
                  <div className="col-md-6">
                    <Link to={"/userinformation"}>
                    <div className="card p-5 mt-4">
                      <div className='row'>
                        <div className='col-md-4'>
                          <img src={user.picture}/>
                        </div>
                        <div className='col-md-8'>
                          <h6>id: {user.id}</h6>
                          <p>{user.firstName} { user.lastName}</p>
                        </div>
                      </div>
                      </div>
                      </Link>
                  </div>
                ))}
                  
              
            </div>

            <div>
              
            </div>

            <Pagination>{
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Pagination.Item key={num}onClick={()=>{this.handlepage(num)}}> {num}</Pagination.Item>
              ))} </Pagination>
          </div>
        ) : (
          <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span></div>
        )
        }
        
      </div >
    )
  
  }
}
