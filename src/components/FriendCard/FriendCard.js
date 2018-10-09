import React, { Fragment } from "react";
import "./FriendCard.css";

const FriendCard = ({ data, handleMap, handleDetailsClick }) => {
  return (
    <Fragment>
        <div className="col s6 m3" key={data._id}>
          <div className="card">
            <div className="card-image">
              <img src={data.picture} alt="Friend" />
              <span className="card-title">{data.name}</span>
            </div>
            <div className="card-content">
              <h3>{data.name}</h3>
              <button onClick={() => handleMap({lat: data.latitude, lng: data.longitude}, data.name)}>View Map</button>
              <button onClick={() => handleDetailsClick(data)}>Details</button>
            </div>
          </div>
        </div>  
    </Fragment>
  )
}

export default FriendCard;