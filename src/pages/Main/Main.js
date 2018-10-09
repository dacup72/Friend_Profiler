import React, { Component, Fragment } from "react";
//import API from "../../utils/API";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";
import MapView from "../../components/Map";
import FriendDetails from "../../components/FriendDetails";

class Main extends Component {
  state = {
    friendsData: [],
    currentCoords: "",
    currentName: "",
    currentData: {},
    reveal: "cards",
    friendsLoaded: 0
  }

  componentWillMount() {
    this.handleLoadMoreBtn();
  }

  handleMap = (coords, name) => {
    this.setState({
      currentCoords: coords,
      currentName: name,
      reveal: "map"
    })
  }

  handleCloseMap = () => {
    this.setState({
      currentCoords: "",
      currentName: "",
      reveal: "cards"
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

  handleDetailsClick = data => {
    this.setState({
      currentData: data,
      reveal: "details"
    })
  }

  handleDetailsClose = () => {
    this.setState({
      currentData: {},
      reveal: "cards"
    })
  }

  renderContent = () => {
    if (this.state.reveal === "cards") {
      return (
        <div>
          <div className="row">
            {this.state.friendsData.map(friend => {
              return (
                <FriendCard
                  data={friend}
                  handleMap={this.handleMap}
                  handleDetailsClick={this.handleDetailsClick}
                />
              )
            })}
          </div>
          <button onClick={this.handleLoadMoreBtn}>Load More Friends</button>
        </div>
      )
    }
    else if(this.state.reveal === "map"){
      return (
        <MapView
          coords={this.state.currentCoords}
          name={this.state.currentName}
          handleCloseMap={this.handleCloseMap}
        />
      )
    }
    else if(this.state.reveal === "details") {
      return (
        <FriendDetails 
          data={this.state.currentData}
          handleDetailsClose={this.handleDetailsClose}
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