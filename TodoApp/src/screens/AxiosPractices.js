import React from 'react';
import SampleItem from '../components/SampleItem';
import {useSelector} from 'react-redux';
import store from '../redux/configureStore';
import {addItem} from '../redux/TypicalList/actions';

import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  SectionList,
} from 'react-native';
import userApis from '../api/usersApi';

const AxiosPractices = ({navigation}) => {
  const [userId, setUserId] = React.useState('');

  const getUsers = async () => {
    try {
      let users = await userApis.getAllUsers();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async id => {
    try {
      let user = await userApis.getUser(id);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={getUsers} title="Get all users" />
      <TextInput
        placeholder={'Input user id'}
        value={userId}
        onChangeText={text => setUserId(text)}
      />
      <Button onPress={() => getUser(userId)} title="Get user" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  addButtonWrapper: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 20,
    right: 20,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    flex: 1,
    textAlignVertical: 'center',
  },
});

export default AxiosPractices;
