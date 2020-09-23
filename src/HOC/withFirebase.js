import React from "react";
import { FirebaseContext } from "../Firebase";

const withFirebase = (Component) => {
  const componentWithFirebase = (props) => {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => <Component firebase={firebase} {...props} />}
      </FirebaseContext.Consumer>
    );
  };

  return componentWithFirebase;
};

export default withFirebase;
