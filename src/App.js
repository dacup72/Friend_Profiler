import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";

import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
