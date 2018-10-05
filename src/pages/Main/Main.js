import React, { Component, Fragment } from "react";
import friendsData from "../../FriendsData.json";
import FriendCard from "../../components/FriendCard";

class Main extends Component {
  state = {
    friendsData
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default Main;