import React from 'react';
import Dialer from '../Dialer';
import TodoList from '../TodoList';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const blur = () => {
  return <View />;
};

const TabIcon = props => {
  let {source, focused, title} = props;
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={source}
        resizeMode="contain"
        style={focused ? styles.tabIconFocused : styles.tabIconDefault}
      />
      <Text style={focused ? styles.tabTitleFocused : styles.tabTitleDefault}>
        {title}
      </Text>
    </View>
  );
};

const BottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: styles.tabBar,
        // tabBarBackground: blur
      }}>
      <Tab.Screen
        name="Dialer"
        component={Dialer}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/backspace_white.png')}
              focused={focused}
              title="Dialer"
            />
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/backspace_white.png')}
              focused={focused}
              title="To do"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabFocusedColor = '#e32f45';
const tabDefaultColor = '#748c94';

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
  tabIconDefault: {
    tintColor: tabDefaultColor,
    width: 20,
    height: 20,
  },
  tabTitleDefault: {
    color: tabDefaultColor,
    fontSize: 10,
  },
  tabIconFocused: {
    tintColor: tabFocusedColor,
    width: 25,
    height: 25,
  },
  tabTitleFocused: {
    color: tabFocusedColor,
    fontSize: 14,
  },
});

export default BottomTabs;
