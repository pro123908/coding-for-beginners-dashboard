import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

// Creating the store with the root reducer and async middleware redux thunk and exporting it
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
