import React, { useState, useEffect } from 'react';
import { getAllSites } from '../services/sites';
import { useNavigate } from 'react-router-dom';

function Site() {
    const navigate = useNavigate();
  const [Site, setSite] = useState([]);

  useEffect(() => {
    run();
  }, []);

  const run = async () => {
    const data = await getAllSites();
    console.log(data);
    setSite(data);
  };

  const handleDelete = (userId) => {
    const updatedSite = Site.filter(user => user.id !== userId);
    setSite(updatedSite);
  };

  const handleAddSite = () => {
    navigate("/add-site")
  };

  return (
    <div className="user-list-container">
      <h2>Site List</h2>
      <p>Total Sites: {Site.length}</p>
      <button className="add-button" onClick={handleAddSite}>Add Site</button>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            <th>STATUS</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Site.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.url}</td>
              {/* <td></td> */}
              <td>
                <button className="remove-button">{user.allow ? "Allowed" : "Denied"}</button>
              </td>
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

export default Site;
