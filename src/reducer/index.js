import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  Recipe: RecipeReducer,
});

export default rootReducer;
