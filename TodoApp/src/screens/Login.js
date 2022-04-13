import React, {useEffect} from 'react';
import Screens from '../navigators/Screens';
import store from '../redux/configureStore';
import {changeUser} from '../redux/common/actions';

import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

function Login({navigation}) {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  React.useEffect(() => {
    return () => {
      unsubscribe();
    };
  });

  const unsubscribe = store.subscribe(() => {
    //console.log('User: ', store.getState().user);
  });

  let createNewUser = ({name, pass}) => {
    return {
      username: name,
      password: pass,
    };
  };

  let createNewUser1 = (name, pass) => {
    return {
      username: name,
      password: pass,
    };
  };

  const navigateToHome = () => {
    // let user = createNewUser1(username, password);

    // var userInfo = {
    //   name: username,
    //   pass: password,
    // };
    let user = createNewUser({
      name: username,
      pass: password,
    });

    store.dispatch(changeUser(user));
    navigation.navigate(Screens.HOME, {user});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder={'Username'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder={'password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigateToHome()}>
        <Text style={styles.loginButtonTitle}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.loginButton, {opacity: 0}]}
        onPress={() => unsubscribe()}>
        <Text style={styles.loginButtonTitle}>unsubsribe</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8EAED',
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#55BCF6',
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
  },
  loginButtonTitle: {
    fontSize: 16,
    textAlignVertical: 'center',
  },
});

export default Login;
