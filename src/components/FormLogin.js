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
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  changeEmail,
  changePassword,
  authenticateUser,
} from '../actions/AuthenticationActions';
import background from '../assets/bg.png';
import styles from '../styles/index';

class FormLogin extends Component {
  handleLogin() {
    const { email, password } = this.props;

    this.props.authenticateUser({ email, password });
  }

  renderLoginBtn() {
    if (this.props.loading_spinner) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleLogin()}
      >
        <Text style={styles.buttonText}>ACESSAR</Text>
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
          <KeyboardAvoidingView style={{ flex: 2 }}>
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
              {this.props.loginError}
            </Text>
            <TouchableOpacity onPress={() => Actions.formRegister()}>
              <Text style={styles.notRegistered}>
                Ainda não tem cadastro?{' '}
                <Text style={styles.registerLink}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <View style={{ flex: 2 }}>{this.renderLoginBtn()}</View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AuthenticationReducer.email,
  password: state.AuthenticationReducer.password,
  loginError: state.AuthenticationReducer.loginError,
  loading_spinner: state.AuthenticationReducer.loading_spinner,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  { changeEmail, changePassword, authenticateUser },
  // mapDispatchToProps
)(FormLogin);
