import {useEffect, useState} from 'react';

function FuncUserData() {
    const [users, setUsers] = useState([]);

    const getUserdata = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
        });
        const data = await response.json();
    
        setUsers(data);
        console.log(data);
}

    useEffect(() => {
        getUserdata();
    },[]);

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
                  {
                      users.map((get) => (
                         <tr>
                  <td>{get.id}</td>
                  <td>{get.name}</td>
                  <td>{get.email}</td>
                  <td>{get.phone}</td>
                  <td>{get.website}</td>
                </tr>
                      ))
         }
            </tbody>
          </table>
    </div>
  );
}

export default FuncUserData;

