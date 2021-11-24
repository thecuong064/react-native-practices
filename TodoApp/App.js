import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';

import Screens from './src/constants/Screens';
import TodoList from './src/screens/TodoList';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Dialer from './src/screens/Dialer';
import TypicalList from './src/screens/TypicalList';
import ApiPractices from './src/screens/ApiPractices';
import InputControls from './src/screens/InputControls';
import BottomTabs from './src/screens/BottomTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
