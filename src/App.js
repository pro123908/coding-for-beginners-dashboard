import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import { FirebaseContext } from "./Firebase";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          path="/login"
          component={() => (
            <FirebaseContext.Consumer>
              {(firebase) => <Login firebase={firebase} />}
            </FirebaseContext.Consumer>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
