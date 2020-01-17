import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';
import firebaseConfig from './config/firebaseConfig';

export default class App extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
    }
  }

  render() {
    return (
      <>
        <Provider
          store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
        >
          <Routes />
        </Provider>
      </>
    );
  }
}
