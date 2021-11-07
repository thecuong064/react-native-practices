import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from './src/constants/Screens';
import TodoList from './src/screens/TodoList';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Dialer from './src/screens/Dialer';
import TypicalList from './src/screens/TypicalList';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';

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
          <Stack.Screen
            name={Screens.TYPICAL_LIST_FAB}
            component={TypicalList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
