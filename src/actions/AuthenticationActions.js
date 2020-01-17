import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  change_email,
  change_password,
  change_name,
  register_success,
  register_error,
  user_login_success,
  user_login_error,
  login,
} from './types';

export const changeEmail = text => {
  return {
    type: change_email,
    payload: text,
  };
};

export const changePassword = text => {
  return {
    type: change_password,
    payload: text,
  };
};

export const changeName = text => {
  return {
    type: change_name,
    payload: text,
  };
};

export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    dispatch({ type: login });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailB64 = b64.encode(email);

        firebase
          .database()
          .ref(`/contatos/${emailB64}`)
          .push({ name })
          .then(value => registerUserSuccess(dispatch));
      })
      .catch(error => registerUserError(error, dispatch));
  };
};

const registerUserSuccess = dispatch => {
  dispatch({
    type: register_success,
  });

  Actions.welcome();
};

const registerUserError = (error, dispatch) => {
  dispatch({
    type: register_error,
    payload: error.message,
  });
};

export const authenticateUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: login });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(value => userLoginSuccess(dispatch))
      .catch(error => userLoginError(error, dispatch));
  };
};

const userLoginSuccess = dispatch => {
  dispatch({
    type: user_login_success,
  });

  Actions.home();
};

const userLoginError = (error, dispatch) => {
  dispatch({
    type: user_login_error,
    payload: error.message,
  });
};
