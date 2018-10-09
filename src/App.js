import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import friendsData from "./FriendsData.json";
//import API from "../../utils/API";

import Main from "./pages/Main";
import MapView from "./pages/MapView";
import FriendDetails from "./pages/FriendDetails";

class App extends Component {
  state = {
    friendsData: [],
    friendsLoaded: 0,
    sortBy: "index"
  }

  componentWillMount() {
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

  handleLoadMore = (addBy, sortBy = this.state.sortBy, loaded = this.state.friendsLoaded) => {
    const limit = loaded + addBy;
    const sortedData = friendsData.sort(this.dynamicSort(sortBy)).slice(0, limit);

    this.setState({
      friendsData: sortedData,
      friendsLoaded: limit,
      sortBy: sortBy
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" style={{ width: "85%" }}>
          <Route exact path="/" render={() => (
            <Main
              data={this.state.friendsData}
              handleLoadMore={this.handleLoadMore}
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
