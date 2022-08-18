import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import Routes from './src/routes';
const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
export default App;
