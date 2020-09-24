import React from "react";

const withFirebase = (Component) => {
  const componentWithFirebase = (props) => {
    return (
      <>
        {/* {(firebase) => <Component firebase={firebase} {...props} />} */}
        <Component {...props} />
      </>
    );
  };

  return componentWithFirebase;
};

export default withFirebase;
