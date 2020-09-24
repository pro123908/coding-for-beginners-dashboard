import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipe, getRecipes } from "../../actions/actions";

const Home = (props) => {
  useEffect(() => {
    // props.getRecipes("Sausage");
  }, []);

  useEffect(() => {
    console.log("Recipes => ", props.recipes);
  }, [props.recipes]);

  return (
    <div>
      {props.recipes.map((recipe) => (
        <div>{recipe.title}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state red => ", state);
  return {
    recipe: state.Recipe.recipe,
    recipes: state.Recipe.recipes,
  };
};

const mapDispatchToProps = {
  getRecipe,
  getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
