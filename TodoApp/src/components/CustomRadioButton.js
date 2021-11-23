import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const CustomRadioButton = props => {
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={props.onPress}>
      <View style={styles.radioBox}>
        <View
          style={props.isSelected ? styles.radioActive : styles.radioInactive}
        />
      </View>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBox: {
    width: 20,
    height: 20,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  radioActive: {
    width: 12,
    height: 12,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#000',
  },
  radioInactive: {
    width: 12,
    height: 12,
    borderColor: '#000',
  },
});

export default CustomRadioButton;
