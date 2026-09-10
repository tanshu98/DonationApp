import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigation from './src/navigation/MainNavigation';
import store, {persistor} from './src/utils/redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash.hide({fade: true});
    };

    hideSplash();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
      <Toast />
    </Provider>
  );
};

export default App;