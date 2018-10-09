import React, { Fragment } from "react";

const Nav = ({ handleLoadMore }) => (
  <Fragment>
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo">Friend Profiler</div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li onClick={() => handleLoadMore(0, "name", 10)}>Name</li>
          <li onClick={() => handleLoadMore(0, "age", 10)}>Age</li>
          <li onClick={() => handleLoadMore(0, "gender", 10)}>Gender</li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default Nav;