import axios from "axios";
import { useContext } from "react";
import { RecipesApiKey } from "../config";

import { GET_GOOGLE_USER, GET_RECIPES } from "./actionType";

import firebase from "firebase";
import { handleGoogleUserInLocalStorage } from "../api/LocalStorage";

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

export const getGoogleUser = (history) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log("Result -> ", result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var { displayName, email, photoURL, refreshToken, uid } = result.user;

        var googleUser = {
          token,
          displayName,
          email,
          photoURL,
          refreshToken,
          uid,
        };

        // return googleResponseCallback({ token, user });
        dispatch({
          type: GET_GOOGLE_USER,
          payload: googleUser,
        });
        handleGoogleUserInLocalStorage(googleUser);
        history.push("/home");
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
};
