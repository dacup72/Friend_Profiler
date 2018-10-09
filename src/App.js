import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import friendsData from "./FriendsData.json";
import API from "./utils/API";

import Main from "./pages/Main";
import MapView from "./pages/MapView";
import FriendDetails from "./pages/FriendDetails";

class App extends Component {
  state = {
    friendsData: [],
    friendsLoaded: 0,
    sortBy: "index",
    filterType: "",
    filterValue: ""
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

  handleLoadMore = (addBy, sortBy = this.state.sortBy, loaded = this.state.friendsLoaded, inputData) => {
    const limit = loaded + addBy;
    const data = inputData || friendsData;
    const sortedData = friendsData.sort(this.dynamicSort(sortBy)).slice(0, limit);

    this.setState({
      friendsData: sortedData,
      friendsLoaded: limit,
      sortBy: sortBy
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  // TODO fix it
  handleSubmit = () => {
    let data = [];
    friendsData.map(element => {
      if(element[this.state.filterType].toString() === this.state.filterValue) {
        data.push(element)
      }
    })

    this.handleLoadMore(0, null, 10, data);
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
