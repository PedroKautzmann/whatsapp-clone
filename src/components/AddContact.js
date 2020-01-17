import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { changeAddContactEmail, addContact } from '../actions/AppActions';
import styles from '../styles/index';

class AddContact extends Component {
  renderAddContact() {
    if (!this.props.add_contact_success) {
      return (
        <>
          <View style={styles.addContactTextInputView}>
            <TextInput
              placeholder="Email"
              style={styles.addContactTextInput}
              onChangeText={text => this.props.changeAddContactEmail(text)}
              value={this.props.add_contact_email}
            />
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() =>
                this.props.addContact(this.props.add_contact_email)
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>ADICIONAR</Text>
            </TouchableOpacity>

            <Text style={styles.authenticationErrors}>
              {' '}
              {this.props.add_contact_text_error}{' '}
            </Text>
          </View>
        </>
      );
    } else {
      return (
        <View>
          <Text style={styles.addContactSuccessText}>
            Contato adicionado com sucesso!
          </Text>
        </View>
      );
    }
  }

  render() {
    return <View style={styles.addContactView}>{this.renderAddContact()}</View>;
  }
}

const mapStateToProps = state => ({
  add_contact_email: state.AppReducer.add_contact_email,
  add_contact_text_error: state.AppReducer.add_contact_text_error,
  add_contact_success: state.AppReducer.add_contact_success,
});

export default connect(mapStateToProps, { changeAddContactEmail, addContact })(
  AddContact,
);
