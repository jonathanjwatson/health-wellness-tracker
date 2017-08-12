import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import FoodList from "./components/FoodList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/user/:userId" component={UserDashboard} />
            <Route path="/user/:userId/food" component={FoodList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;