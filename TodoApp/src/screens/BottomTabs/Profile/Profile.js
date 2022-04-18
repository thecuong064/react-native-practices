import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  Image,
} from 'react-native';

const Profile = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <>
      <Text>Profile</Text>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    // bottom: 0,
    // left: 20,
    // right: 20,
    // elevation: 0,
    // backgroundColor: '#fff000',
    // borderRadius: 15,
  },
});

export default Profile;
