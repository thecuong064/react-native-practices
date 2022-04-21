import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screens from './Screens';
import BeautifulBottomTabs from './BeautifulBottomTabs';
import BottomTabs from './BottomTabs';
import {
  ApiPractices,
  AxiosPractices,
  Dialer,
  Home,
  InputControls,
  Login,
  TodoList,
  TypicalList,
} from '../screens';
import {Modals} from '../screens/Modals';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetScreen} from '../screens/BottomSheet';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name={Screens.TODO_LIST} component={TodoList} />
          <Stack.Screen name={Screens.LOGIN} component={Login} />
          <Stack.Screen name={Screens.HOME} component={Home} />
          <Stack.Screen name={Screens.DIALER} component={Dialer} />
          <Stack.Screen name={Screens.API_PRACTICES} component={ApiPractices} />
          <Stack.Screen name={Screens.TYPICAL_LIST} component={TypicalList} />
          <Stack.Screen
            name={Screens.INPUT_CONTROLS}
            component={InputControls}
          />
          <Stack.Screen name={Screens.BOTTOM_TABS} component={BottomTabs} />
          <Stack.Screen
            name={Screens.BEAUTIFUL_BOTTOM_TABS}
            component={BeautifulBottomTabs}
          />
          <Stack.Screen
            name={Screens.AXIOS_PRACTICES}
            component={AxiosPractices}
          />
          <Stack.Screen name={Screens.MODALS} component={Modals} />
          <Stack.Screen
            name={Screens.BOTTOM_SHEET}
            component={BottomSheetScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default ApplicationNavigator;
