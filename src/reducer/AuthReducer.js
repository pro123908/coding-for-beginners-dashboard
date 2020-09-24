import { GET_GOOGLE_USER } from "../actions/actionType";

const initialState = {
  googleUser: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_USER:
      return { ...state, googleUser: { ...action.payload } };

    default:
      return state;
  }
};

export default AuthReducer;
