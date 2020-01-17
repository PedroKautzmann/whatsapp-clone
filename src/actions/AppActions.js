import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import _ from 'lodash';

import {
  change_add_contact_email,
  add_contact_error,
  add_contact_success,
} from './types';

export const changeAddContactEmail = text => {
  return {
    type: change_add_contact_email,
    payload: text,
  };
};

export const addContact = email => {
  let emailB64 = b64.encode(email);

  return dispatch => {
    firebase
      .database()
      .ref(`/contatos/${emailB64}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const userData = _.first(_.values(snapshot.val()));

          const { currentUser } = firebase.auth();

          let userEmailB64 = b64.encode(currentUser.email);

          firebase
            .database()
            .ref(`/usuario_contatos/${userEmailB64}`)
            .push({ email, name: userData.name })
            .then(() => addContactSuccess(dispatch))
            .catch(error => addContactError(error.message, dispatch));
        } else {
          dispatch({
            type: add_contact_error,
            payload: 'Email informado não corresponde a um usuário válido!',
          });
        }
      });
  };
};

const addContactError = (error, dispatch) =>
  dispatch({
    type: add_contact_error,
    payload: error,
  });

const addContactSuccess = dispatch =>
  dispatch({
    type: add_contact_success,
    payload: true,
  });

export const addNewContactForm = () => ({
  type: add_contact_success,
  payload: false,
});
