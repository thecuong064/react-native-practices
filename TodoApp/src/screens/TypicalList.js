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

function TypicalList({navigation}) {
  const items = useSelector(state => state.typicalList);

  function onItemPressed() {}

  function onAddButtonPressed() {
    var newItem = {
      title: 'New Item',
      description: 'New Desc',
    };

    store.dispatch(addItem(newItem));
  }

  const renderItem = ({item}) => (
    <SampleItem
      item={item}
      // title={item.title}
      // description={item.description}
      // onPress={() => onItemPressed()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={1}
      />

      <TouchableOpacity
        style={styles.addButtonWrapper}
        onPress={() => onAddButtonPressed()}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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

export default TypicalList;
