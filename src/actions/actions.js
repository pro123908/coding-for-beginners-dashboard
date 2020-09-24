import axios from "axios";
import { RecipesApiKey } from "../config";
import { GET_RECIPES } from "./actionType";

export const getRecipes = (query) => {
  console.log("Query => ", query);
  return async (dispatch) => {
    const recipes = {
      data: {
        results: [],
      },
    };
    // const recipes = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${RecipesApiKey}`
    // );

    // console.log("After => ", recipes.data.results);

    dispatch({ type: GET_RECIPES, payload: recipes.data.results });
  };
};

export const getRecipe = (query) => {
  return (dispatch) => {};
};
