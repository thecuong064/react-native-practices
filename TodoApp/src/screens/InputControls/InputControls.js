import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
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
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group';
import {CustomRadioButton} from '../../components';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
  },
  {
    id: '3',
    label: 'Option 3',
    value: 'option3',
  },
  {
    id: '4',
    label: 'Option 4',
    value: 'option4',
  },
];

const checkboxItems = [
  {
    id: '1',
    label: 'Option 1',
    value: 'option1',
    isSelected: false,
  },
  {
    id: '2',
    label: 'Option 2',
    value: 'option2',
    isSelected: false,
  },
];

const InputControls = () => {
  const [number, setNumber] = useState(0);
  const [checked, setChecked] = useState(false);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [items, setItems] = useState(checkboxItems);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  function revertSelection(item) {
    let newItems = [...items];
    var index = newItems.indexOf(item);
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{alignSelf: 'center'}}>{number}</Text>
        <Slider
          minimumValue={0}
          maximumValue={10}
          value={number}
          onValueChange={value => setNumber(value)}
          step={1}
        />
        <Progress.Bar width={null} progress={number / 10} />
        <Progress.Bar width={null} indeterminate={true} />
        <Progress.Pie size={100} progress={number / 10} />
        <Progress.Circle size={100} progress={number / 10} showsText={true} />
        <BouncyCheckbox
          size={25}
          fillColor="red"
          unfillColor="#FFFFFF"
          text="Custom Checkbox"
          value={checked}
          onPress={isChecked => {
            setChecked(isChecked);
          }}
          textStyle={{
            textDecorationLine: 'none',
          }}
        />
        <CheckBox value={checked} onValueChange={value => setChecked(value)} />
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
        <Text style={{alignSelf: 'center'}}>Radio group</Text>
        {radioButtonsData.map(item => {
          return (
            <CustomRadioButton
              isSelected={item.id === selectedRadioButton?.id}
              title={item.label}
              onPress={() => setSelectedRadioButton(item)}
            />
          );
        })}
        <Text style={{alignSelf: 'center'}}>Checkbox</Text>
        {items.map(item => {
          return (
            <CustomRadioButton
              isSelected={item.isSelected}
              title={item.label}
              onPress={() => revertSelection(item)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
});

export default InputControls;
