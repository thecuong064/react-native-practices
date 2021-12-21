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
import Home from './Home';
import Explore from './Explore';
import Favorites from './Favorites';
import Profile from './Profile';
import TakePhoto from './TakePhoto';

const Tab = createBottomTabNavigator();

const isTabbarAbsolute = false;

const TakePhotoButton = ({children, onPress}) => (
  <TouchableOpacity 
    style={{
      top: -25,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onPress={onPress}
  >
    <View style={{
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#e32f45',
      elevation: 5,
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabIcon = props => {
  let {source, focused, title} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
      }}>
      <Image
        source={source}
        resizeMode="contain"
        style={focused ? styles.tabIconFocused : styles.tabIconDefault}
      />
      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: tabFocusedColor,
          display: focused ? 'flex' : 'none',
        }}
      />
    </View>
  );
};

const BeautifulBottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: isTabbarAbsolute ? styles.tabBarAbsolute : styles.tabBar,
        // tabBarBackground: blur
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/bottom_tabs/ic_bottom_tab_home.png')}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/bottom_tabs/ic_bottom_tab_explore.png')}
              focused={focused}
              title="Explore"
            />
          ),
        }}
      />
      <Tab.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/bottom_tabs/ic_bottom_tab_add.png')}
              focused={false}
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
              }}
            />
          ),
          tabBarButton: (props) => (
            <TakePhotoButton {...props}/>
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/bottom_tabs/ic_bottom_tab_fav.png')}
              focused={focused}
              title="Favorites"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../../assets/bottom_tabs/ic_bottom_tab_profile.png')}
              focused={focused}
              title="Profile"
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
    elevation: 0,
    borderTopColor: '#fff'
  },
  tabBarAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff000',
    borderRadius: 15,
    height: 45
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

export default BeautifulBottomTabs;
