import React from 'react';
import {
  KeyboardAvoidingView,
  Image,
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

const ApiPracticesItem = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.item.onPress}>
      <Image
        source={
          props.item?.imageSrc
            ? {
                uri: props.item?.imageSrc,
              }
            : require('../../assets/sample_avatar.png')
        }
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 0,
    borderColor: 'orange',
    borderWidth: 2,
  },
});

export default ApiPracticesItem;
