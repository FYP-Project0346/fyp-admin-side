import React, { useState } from 'react';
import { deleteUser, getUsers } from '../services/server';
import { useEffect } from 'react';
import Sidebar from '../components/sidebar';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    run();
  }, [])

  const run = async()=>{
      const data = await getUsers();
      setUsers(data);    
  }

  

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    run();
    alert("user deleted")
    
  };

  return (
    <div style={{display: "flex"}}>
      <Sidebar selectedItem={'Users'}/>
<div className="user-list-container">
      <h2>User List</h2>
      <p>Total Users: {users.length}</p>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Users;
