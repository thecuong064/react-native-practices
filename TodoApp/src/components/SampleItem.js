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

const SampleItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={item.onPress}>
      <Image
        source={require('../assets/sample_avatar.png')}
        style={styles.image}
      />
      <View style={styles.textContentWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  textContentWrapper: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    color: '#a3a2a2',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'orange',
    borderWidth: 2,
  },
});

export default SampleItem;
