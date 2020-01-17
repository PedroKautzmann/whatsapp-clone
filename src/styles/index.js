import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    height: 45,
    color: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    borderRadius: 2,
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#115E54',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notRegistered: {
    fontSize: 20,
    paddingTop: 15,
    color: 'white',
  },
  registerLink: {
    fontWeight: 'bold',
  },
  authenticationErrors: {
    color: 'red',
    fontSize: 18,
    marginTop: 10,
  },
  welcome: {
    flex: 1,
    padding: 15,
  },
  welcomeTitleView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitleText: {
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
  },
  welcomeButtonView: {
    flex: 1,
  },
  tabBarTitleView: {
    height: 50,
    justifyContent: 'center',
  },
  tabBarView: {
    backgroundColor: '#115E54',
    elevation: 4,
    marginBottom: 6,
  },
  tabBarText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#115E54',
    elevation: 0,
  },
  tabBarActions: {
    flexDirection: 'row',
    marginRight: 20,
  },
  tabBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarImage: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLogoutText: {
    fontSize: 18,
    color: 'white',
  },
  tabBarLogout: {
    justifyContent: 'center',
  },
  addContactView: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  addContactTextInputView: {
    flex: 1,
    justifyContent: 'center',
  },
  addContactTextInput: {
    fontSize: 20,
    height: 45,
    color: '#000',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 2,
    marginVertical: 10,
  },
  addContactSuccessText: {
    fontSize: 20,
  },
});

export default styles;
