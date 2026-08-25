import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash.hide({fade: true});
    };

    hideSplash();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;