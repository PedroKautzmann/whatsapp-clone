import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from '../styles/index';
import addContact from '../assets/adicionar-contato.png';
import { addNewContactForm } from '../actions/AppActions';

const TabBarMenu = props => (
  <View style={styles.tabBarView}>
    <StatusBar backgroundColor="#114D44" />

    <View style={styles.tabBarHeader}>
      <View style={styles.tabBarTitleView}>
        <Text style={styles.tabBarText}>WhatsApp Clone</Text>
      </View>

      <View style={styles.tabBarActions}>
        <View style={styles.tabBarImage}>
          <TouchableOpacity
            onPress={() => {
              Actions.addContact();
              props.addNewContactForm();
            }}
          >
            <Image source={addContact} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabBarLogout}>
          <Text style={styles.tabBarLogoutText}>Sair</Text>
        </View>
      </View>
    </View>

    <TabBar {...props} style={styles.tabBar} />
  </View>
);

export default connect(null, { addNewContactForm })(TabBarMenu);
