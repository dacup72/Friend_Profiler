import React, { Component, Fragment } from "react";
//import API from "../../utils/API";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";
import MapView from "../../components/Map";
import FriendDetails from "../../components/FriendDetails";
import Nav from "../../components/Nav";

class Main extends Component {
  state = {
    friendsData: [],
    currentCoords: "",
    currentName: "",
    currentData: {},
    reveal: "cards",
    friendsLoaded: 0,
    sortBy: "index"
  }

  componentWillMount() {
    this.handleLoadMoreBtn("index");
  }

  handleNewSort = (sortBy) => {
    this.handleLoadMoreBtn(sortBy, true);
  }

  dynamicSort = (property) => {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
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

  handleLoadMoreBtn = (sortBy, option) => {
    let data = [];
    let i = 0;
    let limit = this.state.friendsLoaded + 10;
    let sortedData = friendsData;

    sortedData = friendsData.sort(this.dynamicSort(sortBy));
    
    if(option) {
      limit = this.state.friendsLoaded;
    }

    while (i < limit) {
      data.push(sortedData[i]);
      i++;
    }

    this.setState({
      friendsData: data,
      friendsLoaded: limit,
      sortBy: sortBy
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
          <button onClick={() => this.handleLoadMoreBtn(this.state.sortBy)}>Load More Friends</button>
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
        <Nav 
          handleNewSort={this.handleNewSort}
        />
        {this.renderContent()}
      </Fragment>
    )
  }
}

export default Main;