import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ data, data: { picture, name } }) => (
  <Fragment>
    <div className="col s6 m3">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="Friend" />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <Link to={{ pathname: "/map", state: { data } }}>
            <button>View Map</button>
          </Link>
          <Link to={{ pathname: "/details", state: { data } }}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  </Fragment>
);

export default FriendCard;