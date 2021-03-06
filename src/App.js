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
import Header from "./Components/Header";
import Error from "./Components/Error";
import { PublicRoute, PrivateRoute, DynamicRoute } from "./Components/Routes";
import firebase from "firebase";

class App extends Component {
  state = {
    user: false
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: !!user });
      console.log(this.state.user);
    });
  };

  render() {
    return (
      <Router>
        <div>
          <div>{this.state.user === true && <Header />}</div>
          <Switch>
            <DynamicRoute
              path="/"
              authenticated={this.state.user}
              authedComponent={props => <Home />}
              unauthedComponent={props => <Splash />}
            />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
