import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";

import { Provider } from "react-redux";

import { handleGoogleUserInLocalStorage } from "./utils/LocalStorage";
import store from "./store";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

let googleUser = handleGoogleUserInLocalStorage();
if (googleUser) {
  store.dispatch({ type: "GET_GOOGLE_USER", payload: googleUser });
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute component={Home} path="/home" />
          <PublicRoute component={Login} path="/login" restricted={true} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
