import React, {useEffect, useRef} from 'react';
import { AppState } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// import MainNavigation from './src/navigation/MainNavigation';
import RootNavigation from './src/navigation/RootNavigation'
import store, {persistor} from './src/utils/redux/store';
import Toast from 'react-native-toast-message';
import { checkToken } from './src/api/User';

const App = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        await checkToken()
      }
      console.log('Application has rendered.');
      appState.current = nextAppState;
    });

    checkToken();

    return () => {
      subscription.remove();
    };
  }, []);

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
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
      <Toast />
    </Provider>
  );
};

export default App;