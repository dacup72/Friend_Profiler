import React, { Component, Fragment } from "react";
//import API from "../../utils/API";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";
import MapView from "../../components/Map";

class Main extends Component {
  state = {
    friendsData,
    currentCoords: "",
    currentName: "",
    revealMap: false
  }

  handleMap = (coords, name) => {
    this.setState({
      currentCoords: coords,
      currentName: name,
      revealMap: true
    })
  }

  handleCloseMap = () => {
    this.setState({
      currentCoords: "",
      currentName: "",
      revealMap: false
    })
  }

  renderContent = () => {
    if (!this.state.revealMap) {
      return (
        <div className="row">
          {this.state.friendsData.map(friend => {
            return (
              <FriendCard
                key={friend._id}
                name={friend.name}
                company={friend.company}
                age={friend.age}
                picture={friend.picture}
                handleMap={this.handleMap}
                coords={{lat: friend.latitude, lng: friend.longitude}}
              />
            )
          })}
        </div>
      )
    } 
    else {
      return (
        <MapView 
          coords={this.state.currentCoords}
          name={this.state.currentName}
          handleCloseMap={this.handleCloseMap}
        />
      )
    }
  }


  render() {
    return (
      <Fragment>
        {this.renderContent()}
      </Fragment>
    )
  }
}

export default Main;