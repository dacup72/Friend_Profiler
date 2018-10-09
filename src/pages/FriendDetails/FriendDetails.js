import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FriendDetails = ({ location: { state: { data: { name, about, balance, age, eyeColor, gender, company, email, phone } } } }) => (
  <Fragment>
    <div className="col s12 m12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{name}</span>
          <p>{about}</p>
        </div>
        <ul>
          <li>Balance: {balance}</li>
          <li>Age: {age}</li>
          <li>Eye Color: {eyeColor}</li>
          <li>Gender: {gender}</li>
          <li>Company: {company}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
        <Link to="/"><button>Close Details</button></Link>
      </div>
    </div>
  </Fragment>
);

export default FriendDetails;
