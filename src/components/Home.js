import React, { Component, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Chats from './Chats';
import Contacts from './Contacts';

// import styles from '../styles/index';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Conversas' },
    { key: 'second', title: 'Contatos' },
  ]);

  const renderHeader = props => <TabBarMenu {...props} />;

  const renderScene = SceneMap({
    first: Chats,
    second: Contacts,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderHeader}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
