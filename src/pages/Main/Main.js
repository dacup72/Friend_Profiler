import React, { Component, Fragment } from "react";
import friendsData from "../../FriendsData.json";

class Main extends Component {
  state = {
    friendsData
  }

  render() {
    return (
      <Fragment>
        {this.state.friendsData.map(friend => {
          return (
            <div>
              {friend.name}
            </div>
          )
        })}
      </Fragment>
    )
  }
}

export default Main;