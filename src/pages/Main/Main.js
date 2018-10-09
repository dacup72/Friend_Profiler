import React, { Fragment } from "react";
import FriendCard from "../../components/FriendCard";
import Nav from "../../components/Nav";

const Main = ({ data, handleLoadMore, handleChange, handleSubmit, filterType, filterValue }) => (
  <Fragment>
    <Nav 
      handleLoadMore={handleLoadMore} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      filterType={filterType}
      filterValue={filterValue}
    />
    <div className="row">
      {data.map(friend => <FriendCard data={friend} key={friend._id} />)}
    </div>
    <button onClick={() => handleLoadMore(10)}>Load More Friends</button>
  </Fragment>
);

export default Main;