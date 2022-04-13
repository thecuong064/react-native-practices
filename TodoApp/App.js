import React from 'react';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';
import ApplicationNavigator from './src/navigators/Application';

function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}

export default App;
