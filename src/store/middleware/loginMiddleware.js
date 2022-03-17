import { LoginAPI } from "../../components/Login/loginAPI";
import {
  ACTION_LOGIN_ATTEMPTING,
  ACTION_LOGIN_SUCCESS,
  loginSuccessAction,
  loginErrorAction
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === ACTION_LOGIN_ATTEMPTING) {
    // MAKE AN HTTP REQUEST to try and login.
    LoginAPI.login(action.payload)
      .then(profile => {
        dispatch(loginSuccessAction(profile))
      })
      .catch(error => {
        dispatch(loginErrorAction(error.message))
      })
  }

  if (action.type === ACTION_LOGIN_SUCCESS) {
    //Now you are logged in
    dispatch(sessionSetAction(action.payload))


  }
};
