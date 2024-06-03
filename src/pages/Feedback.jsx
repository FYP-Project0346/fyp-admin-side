import React, { useState } from 'react';
import { deleteFeedback, getFeedbacks } from '../services/feedback';
import { useEffect } from 'react';
import Sidebar from '../components/sidebar';

function Feedback() {
  const [Feedback, setFeedback] = useState([]);

  useEffect(()=>{
    run();
  }, [])

  const run = async()=>{
      const data = await getFeedbacks();
      setFeedback(data); 
  }

  

  const handleDelete = async (id) => {
    const status = await deleteFeedback(id);
    if(status){
        alert("Feedback deleted")
        await run();
    }else{
        alert("Couldn't delete feedback");
    }
    
  };



  return (
    <div className='d-flex'>
    <Sidebar/>
    <div style={{margin: "30px", marginLeft: "60px"}}>
    <h1>Feedbacks</h1>

    <div>
    {Feedback.map(user => (            
              <div style={{
                backgroundColor: "white",
                margin: "20px",
                boxShadow: "0px 0px 20px gray",
                padding: "20px",
                width: "1150px"
              }}>
              <b>Customer Id: </b>{user.cus_id} <br/>
              <b>Email:</b> {user.email} <br/>
              <b>Title:</b> {user.message} <br/>
              <b>Message:</b> {user.message} <br/>
              <div className='d-flex justify-content-end'>
              <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button> <br/>
              </div>
              </div>
          ))}
    </div>


    </div>
    
    </div>
  )

  return (
    <div style={{display: "flex"}}>
    <Sidebar selectedItem={"Feedback"}/>
    <div className="user-list-container">
      <h2>Feedback List</h2>
      <p>Total Feedback: {Feedback.length}</p>
      <table className="user-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Feedback.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.message}</td>
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

export default Feedback;
