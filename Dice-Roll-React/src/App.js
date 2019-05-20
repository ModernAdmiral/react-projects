import React, { Component } from "react";
import Clicker from "./RollDice";
import RollDice from "./RollDice";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
      <RollDice />
      </div>
    );
  }
}

export default App;
