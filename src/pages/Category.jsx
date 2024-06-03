import React, { useState, useEffect } from 'react';
import { getAllCategorys } from '../services/Categorys';
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    run();
  }, []);

  const run = async () => {
    // const data = await getAllCategorys();
    // console.log(data);
    // setCategory(data);
  };

  const handleDelete = (userId) => {
    const updatedCategory = Category.filter(user => user.id !== userId);
    setCategory(updatedCategory);
  };

  const handleAddCategory = () => {
    navigate("/add-Category")
  };

  return (
    <div className="user-list-container">
      <h2>Category List</h2>
      <p>Total Categorys: {Category.length}</p>
      <button className="add-button" onClick={handleAddCategory}>Add Category</button>
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
          {Category.map(user => (
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

export default Category;
