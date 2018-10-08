import React, { Component, Fragment } from "react";
//import API from "../../utils/API";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";
import MapView from "../../components/Map";

class Main extends Component {
  state = {
    friendsData
  }

  // componentWillMount() {
  //   API.findAll().then(function(me) {
  //     console.log("TEST======  ", me)
  //     this.setState({
  //       friendsData: me
  //     })
  //   })
  // }

  renderContent = () => {
    if (false) {
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
              />
            )
          })}
        </div>
      )
    } 
    else {
      return (
        <MapView 
          markerData={this.state.friendsData}
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