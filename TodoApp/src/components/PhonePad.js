import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const PhonePad = props => {
  return (
    <TouchableOpacity
      style={[styles.padWrapper, props.wrapperStyle]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Text style={[styles.padTitle, props.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  padWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    margin: 5,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'column',
  },
  padTitle: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'center',
    color: '#000',
  },
});

export default PhonePad;
