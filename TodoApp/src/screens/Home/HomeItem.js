import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeItem = props => {
  return (
    <TouchableOpacity style={styles.itemWrapper} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#55BCF6',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    flex: 1,
    borderRadius: 4,
  },
  title: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'center',
  },
});

export default HomeItem;
