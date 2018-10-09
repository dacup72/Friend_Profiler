import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ data, data: { picture, name } }) => {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  return (
  <Fragment>
    <div className="col s12 m6 l4 xl3">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="Friend" />
        </div>
        <div className="card-content">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
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
};

export default FriendCard;