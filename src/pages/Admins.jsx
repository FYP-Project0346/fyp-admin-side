import React, { useState, useEffect } from 'react';
import { getAllAdmins } from '../services/server';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    run();
  }, []);

  const run = async () => {
    const data = await getAllAdmins();
    console.log(data);
    setAdmin(data);
  };

  const handleDelete = (userId) => {
    const updatedAdmin = admin.filter(user => user.id !== userId);
    setAdmin(updatedAdmin);
  };

  const handleAddAdmin = () => {
    navigate("/add-admin")
  };

  return (
    <div className="user-list-container">
      <h2>Admins List</h2>
      <p>Total Admins: {admin.length}</p>
      <button className="add-button" onClick={handleAddAdmin}>Add Admin</button>
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
          {admin.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <button className="remove-button" onClick={() => handleDelete(user.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
