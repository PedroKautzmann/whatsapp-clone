import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import {
  changeEmail,
  changePassword,
  changeName,
  registerUser,
} from '../actions/AuthenticationActions';
import background from '../assets/bg.png';
import styles from '../styles/index';

class FormRegister extends Component {
  handleRegister() {
    const { name, email, password } = this.props;

    this.props.registerUser({ name, email, password });
  }

  renderRegisterBtn() {
    if (this.props.loading_spinner) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleRegister()}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground source={background} style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>WhatsApp Clone</Text>
          </View>
          <KeyboardAvoidingView style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.name}
              autoCapitalize="words"
              placeholder="Nome"
              placeholderTextColor="white"
              style={styles.textInput}
              onChangeText={text => this.props.changeName(text)}
            />
            <TextInput
              value={this.props.email}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email"
              placeholderTextColor="white"
              style={styles.textInput}
              onChangeText={text => this.props.changeEmail(text)}
            />
            <TextInput
              value={this.props.password}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Senha"
              placeholderTextColor="white"
              style={styles.textInput}
              onChangeText={text => this.props.changePassword(text)}
            />

            <Text style={styles.authenticationErrors}>
              {this.props.registerError}
            </Text>
          </KeyboardAvoidingView>
          <View style={{ flex: 1 }}>{this.renderRegisterBtn()}</View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  name: state.AuthenticationReducer.name,
  email: state.AuthenticationReducer.email,
  password: state.AuthenticationReducer.password,
  registerError: state.AuthenticationReducer.registerError,
  loading_spinner: state.AuthenticationReducer.loading_spinner,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  { changeName, changeEmail, changePassword, registerUser },
  // mapDispatchToProps
)(FormRegister);
