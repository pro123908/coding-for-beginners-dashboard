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
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { handleGoogleUserInLocalStorage } from "./api/LocalStorage";

function reducer(state, action) {
  console.log(action);
  return state;
}

const store = createStore(rootReducer, applyMiddleware(thunk));

let googleUser = handleGoogleUserInLocalStorage();
if (googleUser) {
  store.dispatch({ type: "GET_GOOGLE_USER", payload: googleUser });
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            {true ? <Redirect to="/login" /> : <Home />}
          </Route>

          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
