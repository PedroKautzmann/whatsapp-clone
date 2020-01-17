import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Welcome from './components/Welcome';
import Home from './components/Home';
import AddContact from './components/AddContact';

const Routes = props => (
  <Router>
    <Stack key="root">
      <Scene
        key="formLogin"
        initial
        component={FormLogin}
        title="Login"
        hideNavBar
      />
      <Scene
        key="formRegister"
        component={FormRegister}
        title="Cadastrar"
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: 'white' }}
        navBarButtonColor="white"
      />
      <Scene key="welcome" component={Welcome} hideNavBar />
      <Scene key="home" component={Home} hideNavBar />
      <Scene
        key="addContact"
        component={AddContact}
        title="Adicionar Contato"
        navigationBarStyle={{ backgroundColor: '#115E54' }}
        titleStyle={{ color: 'white' }}
        navBarButtonColor="white"
      />
    </Stack>
  </Router>
);

export default Routes;
