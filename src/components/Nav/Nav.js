import React, { Fragment } from "react";

const Nav = ({ handleNewSort }) => {
  return (
  <Fragment>
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#" onClick={() => handleNewSort("name")}>Name</a></li>
        <li><a href="#" onClick={() => handleNewSort("age")}>Age</a></li>
        <li><a href="#" onClick={() => handleNewSort("gender")}>Gender</a></li>
      </ul>
    </div>
  </nav>
  </Fragment>
  )
}

export default Nav;