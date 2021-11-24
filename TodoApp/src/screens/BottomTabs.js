import React from 'react';
import Dialer from './Dialer';
import TodoList from './TodoList';
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
  SectionList,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: true}}>
      <Tab.Screen name="Dialer" component={Dialer} />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
