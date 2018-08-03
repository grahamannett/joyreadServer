import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './css/styles.css';
import OnboardSignUp from './onboard/OnboardSignUp';
import OnboardSignIn from './onboard/OnboardSignIn';
import Home from './Home';
import Header from './Header';

var apiRoutes = {
  signin: 'http://localhost:8080/signin',
  signup: 'http://localhost:8080/signup'
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path="/signup"
            render={(props) => <OnboardSignUp {...props} signUpAPI={apiRoutes.signup} />}
          />
          <Route
            path="/signin"
            render={(props) => <OnboardSignIn {...props} signInAPI={apiRoutes.signin} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;