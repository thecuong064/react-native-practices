import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screens from './Screens';
import TodoList from '../screens/TodoList';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Dialer from '../screens/Dialer';
import TypicalList from '../screens/TypicalList';
import ApiPractices from '../screens/ApiPractices';
import InputControls from '../screens/InputControls';
import AxiosPractices from '../screens/AxiosPractices';
import BeautifulBottomTabs from './BeautifulBottomTabs';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
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
        <Stack.Screen name={Screens.INPUT_CONTROLS} component={InputControls} />
        <Stack.Screen name={Screens.BOTTOM_TABS} component={BottomTabs} />
        <Stack.Screen
          name={Screens.BEAUTIFUL_BOTTOM_TABS}
          component={BeautifulBottomTabs}
        />
        <Stack.Screen
          name={Screens.AXIOS_PRACTICES}
          component={AxiosPractices}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;