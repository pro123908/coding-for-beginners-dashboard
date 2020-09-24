import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  Recipe: RecipeReducer,
  Auth: AuthReducer,
});

export default rootReducer;
