import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  signupLoading: false,
  signinLoading: false,
  isAuth: false,
  error: null,
  username: null,
  email: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupLoading: false,
        error: action.payload,
      };
    case SIGNIN_REQUEST:
      return {
        ...state,
        signinLoading: true,
        error: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signinLoading: false,
        isAuth: true,
        username: action.payload.username,
        email: action.payload.email,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        signinLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        username: null,
        email: "",
      };
    default:
      return state;
  }
};

export default authReducer;
