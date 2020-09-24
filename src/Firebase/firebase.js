import app from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import "firebase/auth";

class firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();

    this.provider = new app.auth.GoogleAuthProvider();
  }

  createUserWithEmailAndPassword = async (email, password) => {
    try {
      const response = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Response => ", response);
    } catch (error) {
      console.error(error);
    }
  };

  signUserWithGoogle = (googleResponseCallback) => {
    this.auth
      .signInWithPopup(this.provider)
      .then((result) => {
        console.log("Result -> ", result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var { displayName, email, photoURL, refreshToken, uid } = result.user;

        // return googleResponseCallback({ token, user });
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
}

export default new firebase();
