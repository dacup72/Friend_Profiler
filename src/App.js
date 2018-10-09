import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import friendsData from "./FriendsData.json";
import API from "./utils/API";

import Main from "./pages/Main";
import MapView from "./pages/MapView";
import FriendDetails from "./pages/FriendDetails";

class App extends Component {
  state = {
    filteredFriends: [],
    friendsData: [],
    friendsLoaded: 0,
    sortBy: "index",
    filterType: "",
    filterValue: "",
    filterResults: false
  }

  componentWillMount() {
    // API.findAll().then(function(res) {
    //   console.log("Response: ", res);
    // });
    this.handleLoadMore(10);
  }

  dynamicSort = property => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  handleLoadMore = (addBy, sortBy = this.state.sortBy, loaded = this.state.friendsLoaded, unFilter = true) => {
    const limit = loaded + addBy;

    if (this.state.filterResults) {
      const sortedData = this.state.filteredFriends.slice(0, limit);
      this.setState({
        friendsData: sortedData,
        friendsLoaded: limit,
        sortBy: sortBy
      })
    }
    else if (unFilter) {
      const sortedData = friendsData.sort(this.dynamicSort(sortBy)).slice(0, limit);
      this.setState({
        filteredFriends: [],
        friendsData: sortedData,
        friendsLoaded: limit,
        sortBy: sortBy,
        filterResults: false
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    const data = friendsData.filter(friend => friend[this.state.filterType].toString() === this.state.filterValue);
    this.setState(
      {
        filteredFriends: data,
        friendsLoaded: 0,
        sortBy: this.state.filterType,
        filterType: "",
        filterValue: "",
        filterResults: true
      },
      () => this.handleLoadMore(10, this.state.filterType, 0, false)
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" style={{ width: "85%" }}>
          <Route exact path="/" render={() => (
            <Main
              data={this.state.friendsData}
              handleLoadMore={this.handleLoadMore}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )} />
          <Route exact path="/map" component={MapView} />
          <Route exact path="/details" component={FriendDetails} />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
