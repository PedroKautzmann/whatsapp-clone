import {
  change_add_contact_email,
  add_contact_error,
  add_contact_success,
} from '../actions/types';

const INITIAL_STATE = {
  add_contact_email: '',
  add_contact_text_error: '',
  add_contact_success: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case change_add_contact_email:
      return { ...state, add_contact_email: action.payload };
    case add_contact_error:
      return { ...state, add_contact_text_error: action.payload };
    case add_contact_success:
      return {
        ...state,
        add_contact_success: action.payload,
        add_contact_email: '',
        add_contact_text_error: '',
      };
    default:
      return state;
  }
};
