import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

function UpdateFunc() {
    const  [userData, setUserData] = useState(null);
    const [pageNumber, setpageNumber] = useState(1);



    const getUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}1&limit=10`, {
            method: "GET",
            headers: {
                "app-id": "63f9bb1edf34608b0d3b7410"
            }
        });
        const data = await response.json();
        setUserData(data);
    }

    useEffect(() => {
        getUserData();
      },[]);
  
  return (
      < div >
      
    
        {userData ? (
          <div className="container mt-4">
            <div className="row">
              {
                userData.map((user) =>
                (
                  <div className="col-md-6">

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
                      
                  </div>
                ))}
                  
              
            </div>

            <div>
              
            </div>

            <Pagination>{
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <Pagination.Item key={num} onClick={() => {
                      //handlepage(num)
                  }}> {num}</Pagination.Item>
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

export default UpdateFunc;
