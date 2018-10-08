import React, { Component, Fragment } from "react";
//import API from "../../utils/API";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";
import MapView from "../../components/Map";

class Main extends Component {
  state = {
    friendsData: [],
    currentCoords: "",
    currentName: "",
    revealMap: false,
    friendsLoaded: 0
  }

  componentWillMount() {
    this.handleLoadMoreBtn();
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

  handleLoadMoreBtn = () => {
    let data = [];
    let i = 0;
    let limit = this.state.friendsLoaded + 10;

    while (i < limit) {
      data.push(friendsData[i]);
      i++;
    }

    this.setState({
      friendsData: data,
      friendsLoaded: limit
    })
  }

  renderContent = () => {
    if (!this.state.revealMap) {
      return (
        <div>
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
                  coords={{ lat: friend.latitude, lng: friend.longitude }}
                />
              )
            })}
          </div>
          <button onClick={this.handleLoadMoreBtn}>Load More Friends</button>
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