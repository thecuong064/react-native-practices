import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/BottomTabs/Home';
import Explore from '../screens/BottomTabs/Explore';
import Favorites from '../screens/BottomTabs/Favorites';
import Profile from '../screens/BottomTabs/Profile';
import TakePhoto from '../screens/BottomTabs/TakePhoto';
import {KeyboardEvents} from '../constants/KeyboardEvents';

const Tab = createBottomTabNavigator();

const isTabbarAbsolute = false;

const TakePhotoButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
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

function takePhoto() {
  Alert.alert('Take photo', null, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

const BeautifulBottomTabs = ({navigation}) => {
  const [isKeyBoardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      KeyboardEvents.KEYBOARD_DID_SHOW,
      () => {
        setIsKeyboardShown(true);
      },
    );
    const hideSubscription = Keyboard.addListener(
      KeyboardEvents.KEYBOARD_DID_HIDE,
      () => {
        setIsKeyboardShown(false);
      },
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: isTabbarAbsolute ? styles.tabBarAbsolute : styles.tabBar,
        // tabBarBackground: blur,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/bottom_tabs/ic_bottom_tab_home.png')}
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
              source={require('../assets/bottom_tabs/ic_bottom_tab_explore.png')}
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
              source={require('../assets/bottom_tabs/ic_bottom_tab_add.png')}
              focused={false}
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => (
            <>
              {!isKeyBoardShown && (
                <TakePhotoButton
                  {...props}
                  // override changing tab behavior
                  onPress={takePhoto}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              source={require('../assets/bottom_tabs/ic_bottom_tab_fav.png')}
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
              source={require('../assets/bottom_tabs/ic_bottom_tab_profile.png')}
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
    borderTopColor: '#fff',
  },
  tabBarAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#fff000',
    borderRadius: 15,
    height: 45,
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
