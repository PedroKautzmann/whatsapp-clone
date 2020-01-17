import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/index';
import logo from '../assets/logo.png';
import background from '../assets/bg.png';

const Welcome = props => (
  <ImageBackground source={background} style={{ flex: 1 }}>
    <View style={styles.welcome}>
      <View style={styles.welcomeTitleView}>
        <Text style={styles.welcomeTitleText}>Seja Bem-Vindo</Text>
        <Image source={logo} />
      </View>
      <View style={styles.welcomeButtonView}>
        <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
      </View>
    </View>
  </ImageBackground>
);

export default Welcome;
