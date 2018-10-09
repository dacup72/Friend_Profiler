import React, { Fragment } from "react";
import { Collapsible, CollapsibleItem, Row, Input, Dropdown, Button, NavItem, Navbar } from "react-materialize";

const Nav = ({ handleLoadMore, handleChange, handleSubmit, filterValue, filterType }) => (
  <Fragment>
    <Navbar brand='Friend Profiler' right>

      <NavItem href="#">
        <Input onChange={handleChange} name="filterType" type='select' label="Filter Type" value={filterType} >
          <option value='name'>Name</option>
          <option value='age'>Age</option>
          <option value='eyeColor'>Eye Color</option>
          <option value='gender'>Gender</option>
          <option value='email'>Email</option>
          <option value='company'>Company</option>
        </Input>
      </NavItem>
      
      <NavItem href="#">
        <Input onChange={handleChange} name="filterValue" label="Filter Value" value={filterValue} />
      </NavItem>

      <NavItem href="#">
        <Button onClick={handleSubmit}>Filter</Button>
      </NavItem>

      <Dropdown trigger={<Button>Sort Results</Button>}>
        <NavItem onClick={() => handleLoadMore(0, "name", 10)}>By Name</NavItem>
        <NavItem onClick={() => handleLoadMore(0, "age", 10)}>By Age</NavItem>
        <NavItem onClick={() => handleLoadMore(0, "balance", 10)}>By Balance</NavItem>
      </Dropdown>
    </Navbar>
  </Fragment>
);

export default Nav;