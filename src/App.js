import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Splash from "./Components/Splash";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Settings from "./Components/Settings";
import Footer from "./Components/Footer";
import { PublicRoute, PrivateRoute, DynamicRoute } from "./Components/Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <DynamicRoute
              path="/"
              authedComponent={props => <Home />}
              unauthedComponent={props => <Splash />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
