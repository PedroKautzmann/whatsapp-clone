import {
  change_email,
  change_password,
  change_name,
  register_success,
  register_error,
  user_login_success,
  user_login_error,
  login,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registerError: '',
  loginError: '',
  loading_spinner: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case change_email:
      return { ...state, email: action.payload };
    case change_password:
      return { ...state, password: action.payload };
    case change_name:
      return { ...state, name: action.payload };
    case register_error:
      return {
        ...state,
        registerError: action.payload,
        loading_spinner: false,
      };
    case register_success:
      return { ...state, name: '', password: '', loading_spinner: false };
    case user_login_success:
      return { ...state, name: '', password: '' };
    case user_login_error:
      return { ...state, loginError: action.payload, loading_spinner: false };
    case login:
      return { ...state, loading_spinner: true };
    default:
      return state;
  }
};
