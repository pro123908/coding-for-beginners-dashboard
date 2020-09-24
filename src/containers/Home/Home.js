import React, { useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ Auth: { googleUser } }) => {
  return (
    <div>
      <div>
        <img style={{ width: "500px" }} src={googleUser.photoURL} />
      </div>
      <div>Name : {googleUser.displayName}</div>
      <div>Email : {googleUser.email}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.Auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
