import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import RootNavigation from './src/router/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
const App = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  )

};



export default App;