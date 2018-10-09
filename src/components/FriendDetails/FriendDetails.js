import React, { Fragment } from "react";
import "./FriendDetails.css";

const FriendDetails = ({ data, handleDetailsClose }) => {
  return (
    <Fragment>
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{data.name}</span>
              <p>{data.about}</p>
            </div>
            <ul>
              <li>Balance: {data.balance}</li>
              <li>Age: {data.age}</li>
              <li>Eye Color: {data.eyeColor}</li>
              <li>Gender: {data.gender}</li>
              <li>Company: {data.company}</li>
              <li>Email: {data.email}</li>
              <li>Phone: {data.phone}</li>
            </ul>
            <button onClick={handleDetailsClose}>Close Details</button>
          </div>
        </div>
    </Fragment>
  )
}

export default FriendDetails;