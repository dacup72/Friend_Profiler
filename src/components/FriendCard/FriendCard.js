import React, { Fragment } from "react";
import "./FriendCard.css";

const FriendCard = props => {
  return (
    <Fragment>
        <div className="col s6 m3" key={props.key}>
          <div className="card">
            <div className="card-image">
              <img src={props.picture} alt="Friend" />
              <span className="card-title">{props.name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red" href="#"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>Company: {props.company}</li>
              </ul>
              <button onClick={() => props.handleMap(props.coords, props.name)}>View Map</button>
            </div>
          </div>
        </div>  
    </Fragment>
  )
}

export default FriendCard;