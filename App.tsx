import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux'
import store from './src/utils/redux/store';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash.hide({fade: true});
    };

    hideSplash();
  }, []);

  return (
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
};

export default App;