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

function reducer(state, action) {
  console.log(action);
  return state;
}

const store = createStore(rootReducer, applyMiddleware(thunk));

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
