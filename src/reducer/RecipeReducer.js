import { GET_RECIPE, GET_RECIPES } from "../actions/actionType";

const initialState = {
  recipes: [],
  recipe: {},
  loading: false,
};

const RecipeReducer = (state = initialState, action) => {
  console.log("actin -< ", action);
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };

    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
};

export default RecipeReducer;
