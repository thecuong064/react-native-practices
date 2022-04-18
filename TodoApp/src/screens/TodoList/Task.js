import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.taskWrapper}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.taskLeftBox} />
      </TouchableOpacity>
      <Text style={styles.taskText}>{props.text}</Text>
      <View style={styles.taskRightBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 20,
  },
  taskLeftBox: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
  },
  taskRightBox: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#55BCF6',
  },
});

export default Task;
